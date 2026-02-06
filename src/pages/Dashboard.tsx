import { Users, UserPlus, Phone, CheckCircle } from 'lucide-react';
import { useLeads } from '@/context/LeadsContext';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { LeadsByStatusChart } from '@/components/dashboard/LeadsByStatusChart';
import { LeadsTrendChart } from '@/components/dashboard/LeadsTrendChart';
import { ConversionFunnel } from '@/components/dashboard/ConversionFunnel';
import { RecentLeadsTable } from '@/components/dashboard/RecentLeadsTable';

export function Dashboard() {
  const { leads } = useLeads();

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    converted: leads.filter((l) => l.status === 'converted').length,
  };

  const conversionRate = stats.total > 0 ? Math.round((stats.converted / stats.total) * 100) : 0;

  const statusChartData = [
    { name: 'New', value: stats.new, color: 'hsl(24, 95%, 53%)' },
    { name: 'Contacted', value: stats.contacted, color: 'hsl(45, 93%, 47%)' },
    { name: 'Converted', value: stats.converted, color: 'hsl(142, 71%, 45%)' },
  ];

  const funnelStages = [
    { name: 'New Leads', count: stats.new, color: 'hsl(24, 95%, 53%)' },
    { name: 'Contacted', count: stats.contacted, color: 'hsl(45, 93%, 47%)' },
    { name: 'Converted', count: stats.converted, color: 'hsl(142, 71%, 45%)' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's an overview of your leads.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Leads"
          value={stats.total}
          icon={Users}
          variant="primary"
          trend="All time"
        />
        <StatsCard
          title="New Leads"
          value={stats.new}
          icon={UserPlus}
          variant="orange"
          trend="Awaiting contact"
        />
        <StatsCard
          title="Contacted"
          value={stats.contacted}
          icon={Phone}
          variant="yellow"
          trend="In progress"
        />
        <StatsCard
          title="Converted"
          value={stats.converted}
          icon={CheckCircle}
          variant="green"
          trend="Successfully closed"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LeadsByStatusChart data={statusChartData} />
        <LeadsTrendChart leads={leads} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ConversionFunnel stages={funnelStages} conversionRate={conversionRate} />
        <RecentLeadsTable leads={leads} />
      </div>
    </div>
  );
}

export default Dashboard;
