// Qualification Agent
// Uses Ollama + mock enrichment data to intelligently score leads.

import ollama from 'ollama';

export class QualificationAgent {
  public async scoreLead(leadData: any): Promise<any> {
    console.log(`[Qualification Agent] Assessing lead intent for: ${leadData.email}`);
    
    const prompt = `You are a B2B Lead Qualification Agent.
Review the following lead data:
Name: ${leadData.name}
Company: ${leadData.company}
Email: ${leadData.email}
Context: They recently viewed the pricing page and are in the enterprise sector.

Analyze this lead and assign a score out of 100, suggest an action, and determine the intent level.
Return ONLY a valid JSON object with this exact structure:
{
  "score": number,
  "intent": "HIGH" | "MEDIUM" | "LOW",
  "suggestedAction": "ADD_TO_FAST_TRACK" | "NURTURE" | "DISQUALIFY",
  "tags": ["string array of 3 contextual tags"]
}`;

    try {
      const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }],
        format: 'json',
      });
      
      const result = JSON.parse(response.message.content);
      console.log(`[Qualification Agent] Evaluated Score:`, result.score);
      return result;

    } catch (err) {
       console.error(`[Qualification Agent] LLM failed, using mock score. Error:`, err);
       const mockScore = Math.floor(Math.random() * 100);
       const intentHigh = mockScore > 75;
       
       return {
         score: mockScore,
         intent: intentHigh ? 'HIGH' : 'LOW',
         suggestedAction: intentHigh ? 'ADD_TO_FAST_TRACK' : 'NURTURE',
         tags: ['B2B', 'SaaS', intentHigh ? 'Hot' : 'Cold']
       };
    }
  }
}
