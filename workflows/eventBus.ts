// Event Bus
// A simple in-memory implementation of an Event Bus to simulate Kafka/Redis Queues for long-running cadences.
// In production, this would be replaced with BullMQ + Redis, or Confluent Kafka.

import { EventEmitter } from 'events';

export interface CadenceEvent {
  action: 'START_CADENCE' | 'EXECUTE_STEP' | 'PAUSE_CADENCE';
  payload: {
    playbookId: string;
    leadId: string;
    stepId?: string;
    [key: string]: any;
  };
  executeAt: Date;
}

class EventBus extends EventEmitter {
  private queue: CadenceEvent[] = [];
  private processing: boolean = false;

  constructor() {
    super();
    // Start the mock background worker loop
    setInterval(() => this.processQueue(), 1000);
  }

  public publish(event: CadenceEvent) {
    console.log(`[Event Bus] Received event: ${event.action} for lead ${event.payload.leadId}`);
    this.queue.push(event);
    // Sort by execution time
    this.queue.sort((a, b) => a.executeAt.getTime() - b.executeAt.getTime());
  }

  private processQueue() {
    if (this.processing) return;
    this.processing = true;

    try {
      const now = new Date();
      
      // Find events that are ready to be executed
      const readyEvents = this.queue.filter(e => e.executeAt <= now);
      this.queue = this.queue.filter(e => e.executeAt > now);

      for (const event of readyEvents) {
        console.log(`[Event Bus] Dispatching ${event.action} for lead ${event.payload.leadId}`);
        this.emit(event.action, event.payload);
      }
    } catch (err) {
      console.error('[Event Bus] Error processing queue', err);
    } finally {
      this.processing = false;
    }
  }
}

// Singleton instance
export const cadenceEventBus = new EventBus();
