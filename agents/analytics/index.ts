// Analytics Agent
// Diagnoses conversion bottlenecks and feeds insights back into the Strategy Agent using Ollama.

import ollama from 'ollama';

export class AnalyticsAgent {
  public async diagnoseBottlenecks(campaignId: string): Promise<any> {
    console.log(`[Analytics Agent] Diagnosing bottlenecks for campaign: ${campaignId}`);
    
    const openRate = Math.random();
    const replyRate = openRate * (Math.random() * 0.5);

    const prompt = `You are an AI RevOps Data Analyst.
Analyze the following campaign metrics and determine the primary bottleneck if one exists.
Metrics:
- Open Rate: ${(openRate * 100).toFixed(1)}%
- Reply Rate: ${(replyRate * 100).toFixed(1)}%

Return ONLY a valid JSON object with the following exact structure:
{
  "bottleneckDetected": "SUBJECT_LINE" | "CALL_TO_ACTION" | "NONE",
  "suggestion": "Detailed 1 sentence string explaining the recommended fix"
}`;

    try {
      const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }],
        format: 'json',
      });
      const result = JSON.parse(response.message.content);
      
      return {
        campaignId,
        metrics: {
          openRate: openRate.toFixed(2),
          replyRate: replyRate.toFixed(2),
          bottleneckDetected: result.bottleneckDetected,
        },
        suggestion: result.suggestion
      };
    } catch (err) {
      console.error(`[Analytics Agent] LLM failed, using fallback. Error:`, err);
      return {
        campaignId,
        metrics: {
          openRate: openRate.toFixed(2),
          replyRate: replyRate.toFixed(2),
          bottleneckDetected: openRate < 0.2 ? 'SUBJECT_LINE' : replyRate < 0.05 ? 'CALL_TO_ACTION' : 'NONE',
        },
        suggestion: 'Suggesting a new playbook variant based on standard historic data.'
      };
    }
  }
}
