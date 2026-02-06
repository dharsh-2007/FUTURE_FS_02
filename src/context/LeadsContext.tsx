import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Lead, LeadStatus } from '@/types/lead';
import { sampleLeads } from '@/data/sampleLeads';

interface LeadsContextType {
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
  updateLead: (id: string, lead: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  getLeadById: (id: string) => Lead | undefined;
}

const LeadsContext = createContext<LeadsContextType | undefined>(undefined);

export function LeadsProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>(sampleLeads);

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt'>) => {
    const newLead: Lead = {
      ...leadData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const updateLead = (id: string, leadData: Partial<Lead>) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, ...leadData } : lead))
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const getLeadById = (id: string) => {
    return leads.find((lead) => lead.id === id);
  };

  return (
    <LeadsContext.Provider
      value={{ leads, addLead, updateLead, deleteLead, getLeadById }}
    >
      {children}
    </LeadsContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadsContext);
  if (context === undefined) {
    throw new Error('useLeads must be used within a LeadsProvider');
  }
  return context;
}
