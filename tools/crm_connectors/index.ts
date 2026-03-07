// CRM Connectors
// Connects to Salesforce, HubSpot, or other CRM systems.

export interface CrmConnector {
  getLead(leadId: string): Promise<any>;
  updateLeadStatus(leadId: string, status: string): Promise<boolean>;
}

export class MockCrmConnector implements CrmConnector {
  public async getLead(leadId: string): Promise<any> {
    console.log(`[CRM Mock] Fetching lead ${leadId}`);
    return {
      id: leadId,
      name: 'Jane Doe',
      email: 'jane@example.com',
      company: 'TechCorp',
      status: 'NEW'
    };
  }

  public async updateLeadStatus(leadId: string, status: string): Promise<boolean> {
    console.log(`[CRM Mock] Updated lead ${leadId} status to ${status}`);
    return true;
  }
}
