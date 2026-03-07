// Background Worker
// Listens to Event Bus events and triggers the appropriate Agent or Tool

import { cadenceEventBus } from './eventBus';
import { PersonalizationAgent } from '../agents/personalization';
import { MockMessagingConnector } from '../tools/messaging';

const personalizationAgent = new PersonalizationAgent();
const messagingTool = new MockMessagingConnector();

export function startWorker() {
  console.log('[Worker] Worker started, listening to Event Bus...');

  cadenceEventBus.on('START_CADENCE', async (payload: any) => {
    console.log(`[Worker] Starting cadence for Playbook ${payload.playbookId}`);
    
    // Simulate moving to the first step
    cadenceEventBus.publish({
      action: 'EXECUTE_STEP',
      payload: {
        playbookId: payload.playbookId,
        leadId: payload.leadId,
        stepId: 'step-1-email'
      },
      executeAt: new Date(Date.now() + 2000) // Delay 2 seconds
    });
  });

  cadenceEventBus.on('EXECUTE_STEP', async (payload: any) => {
    console.log(`[Worker] Executing step ${payload.stepId} for lead ${payload.leadId}`);
    
    // Example: Trigger personalization and messaging
    try {
       const leadInfo = { name: `Lead ${payload.leadId}`, company: 'Acme Corp' };
       const message = await personalizationAgent.craftMessage(leadInfo, 'email');
       await messagingTool.sendMessage(`lead_${payload.leadId}@acme.com`, 'email', message);
       
       console.log(`[Worker] Step ${payload.stepId} complete.`);
    } catch (err) {
       console.error(`[Worker] Failed step execution:`, err);
    }
  });
}
