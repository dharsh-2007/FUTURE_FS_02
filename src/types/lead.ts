export type LeadStatus = 'new' | 'contacted' | 'converted';

export interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: LeadStatus;
  notes: string;
  createdAt: Date;
}
