// Strategy Agent
// Constructs A/B test plans and playbook templates for revenue teams using Ollama.

import ollama from 'ollama';

export class StrategyAgent {
  public async generatePlaybook(goal: string, targetAudience: string): Promise<any> {
    console.log(`[Strategy Agent] Generating playbook for goal: ${goal} | Audience: ${targetAudience}`);
    
    const prompt = `You are an expert RevOps Strategy Agent. 
Generate a sales outreach playbook for the goal: "${goal}" targeting the audience: "${targetAudience}".
You MUST return ONLY a valid JSON object with the following exact structure, and absolutely no other text or explanation:

{
  "playbookId": "pb-dynamic-gen",
  "steps": [
    { "type": "email" | "linkedin" | "call" | "wait", "day": number, "instructions": "string" }
  ],
  "estimatedConversion": number (between 0.01 and 0.50)
}`;

    try {
      const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }],
        format: 'json',
      });
      return JSON.parse(response.message.content);
    } catch (err) {
      console.error(`[Strategy Agent] LLM failed, falling back to default. Error:`, err);
      return {
        playbookId: `pb-fallback-${Date.now()}`,
        steps: [
          { type: 'email', day: 1, instructions: 'Initial outreach' },
          { type: 'wait', day: 2, instructions: '2 Days' },
          { type: 'linkedin', day: 4, instructions: 'Connect request' },
        ],
        estimatedConversion: 0.12,
      };
    }
  }

  public async suggestABTest(playbookId: string): Promise<any> {
    return {
      testId: `test-${Date.now()}`,
      variants: ['A', 'B'],
      message: 'Created variant with alternative subject lines.'
    };
  }
}
