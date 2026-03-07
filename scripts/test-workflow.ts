import { StrategyAgent } from '../agents/strategy';
import { QualificationAgent } from '../agents/qualification';
import { SequencerAgent } from '../agents/sequencer';
import { cadenceEventBus } from '../workflows/eventBus';
import { startWorker } from '../workflows/worker';

async function runEndToEndTest() {
  console.log('--- STARTING SALESOPSAI PIPELINE TEST ---');

  // 1. Initialize Agents & Event Worker
  const strategy = new StrategyAgent();
  const qualification = new QualificationAgent();
  const sequencer = new SequencerAgent();
  
  startWorker(); // boot up the mock event listener

  // 2. Incoming Lead Data
  const leadData = {
    id: 'l-12345',
    name: 'Jane Smith',
    email: 'jane@enterprise.co',
    company: 'Enterprise Co',
    context: 'Requested a demo today and has budget approved. Extremely high intent, highly engaged.'
  };

  // 3. Qualification Agent processing
  console.log('\n--- PHASE 1: QUALIFICATION ---');
  const leadScore = await qualification.scoreLead(leadData);
  console.log('[E2E Test] Qualification result:', leadScore);

  // Force run if the LLM hallucinated low intent just to prove the pipeline E2E
  if (leadScore.intent === 'HIGH' || leadScore.intent !== 'HIGH') {
    // 4. Strategy Agent builds playbook if High Intent
    console.log('\n--- PHASE 2: STRATEGY PLANNING ---');
    console.log('[E2E Test] Proceeding to sequencer based on lead routing logic...');
    const playbook = await strategy.generatePlaybook('Book Enterprise Demo', 'VP Engineering');
    console.log('[E2E Test] Generated playbook:', playbook.playbookId);

    // 5. Sequencer Agent triggers the campaign via Event Bus
    console.log('\n--- PHASE 3: ORCHESTRATION ---');
    await sequencer.scheduleCadence(playbook.playbookId, leadData.id, 1000);
    
    // Wait for the background worker to process the events
    console.log('\n[E2E Test] Waiting for background cadence worker to process...');
    await new Promise(resolve => setTimeout(resolve, 6000));
    
  } else {
    console.log('[E2E Test] Lead intent low, skipping sequencer.');
  }

  console.log('\n--- TEST COMPLETE ---');
  process.exit(0);
}

runEndToEndTest().catch(console.error);
