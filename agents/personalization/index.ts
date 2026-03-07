// Personalization Agent
// Crafts personalized email sequences, LinkedIn messages, and call scripts using Ollama.

import ollama from 'ollama';

export class PersonalizationAgent {
  public async craftMessage(leadInfo: any, channel: 'email' | 'linkedin' | 'call'): Promise<string> {
    console.log(`[Personalization Agent] Crafting ${channel} message for ${leadInfo.name} at ${leadInfo.company}`);
    
    const prompt = `You are an expert SDR Personalization Agent.
Write a short, engaging, hyper-personalized cold outreach message for the following lead:
Name: ${leadInfo.name}
Company: ${leadInfo.company}
Channel: ${channel}

Guidelines:
- If email: Write a subject line and a short 3-sentence body.
- If linkedin: Write a connection request under 300 characters.
- If call: Write a 1-2 sentence opening script.
- Be conversational, not salesy. Mention their company exactly once.

Return ONLY the plain text content of the message itself, nothing else.`;

    try {
      const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }]
      });
      return response.message.content.trim();
    } catch (err) {
      console.error(`[Personalization Agent] LLM failed, using fallback. Error:`, err);
      if (channel === 'email') {
        return `Subject: Quick question about ${leadInfo.company}\n\nHi ${leadInfo.name},\n\nNoticed ${leadInfo.company} is scaling its revenue operations. I'd love to share how our platform can automate lead qualification.`;
      }
      if (channel === 'linkedin') {
        return `Hey ${leadInfo.name}, impressed by the growth at ${leadInfo.company}. Let's connect!`;
      }
      return `Hi, this is Alex. Is ${leadInfo.name} available?`;
    }
  }
}
