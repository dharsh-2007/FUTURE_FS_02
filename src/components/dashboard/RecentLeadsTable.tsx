import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/status-badge';
import { Button } from '@/components/ui/button';
import { Lead } from '@/types/lead';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

interface RecentLeadsTableProps {
  leads: Lead[];
}

export function RecentLeadsTable({ leads }: RecentLeadsTableProps) {
  const recentLeads = leads.slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Leads</CardTitle>
          <CardDescription>Latest leads added to the system</CardDescription>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/leads" className="gap-1">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        {recentLeads.length === 0 ? (
          <div className="flex h-32 items-center justify-center">
            <p className="text-muted-foreground">No leads yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{lead.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{lead.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {format(new Date(lead.createdAt), 'MMM dd')}
                  </span>
                  <StatusBadge status={lead.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
