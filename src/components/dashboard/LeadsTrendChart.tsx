import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lead } from '@/types/lead';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';

interface LeadsTrendChartProps {
  leads: Lead[];
}

export function LeadsTrendChart({ leads }: LeadsTrendChartProps) {
  // Generate last 7 days of data
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = startOfDay(subDays(new Date(), 6 - i));
    return {
      date,
      dateStr: format(date, 'MMM dd'),
      total: 0,
      new: 0,
      contacted: 0,
      converted: 0,
    };
  });

  // Count leads created on each day
  leads.forEach((lead) => {
    const leadDate = startOfDay(new Date(lead.createdAt));
    const dayData = last7Days.find((day) => isSameDay(day.date, leadDate));
    if (dayData) {
      dayData.total++;
      if (lead.status === 'new') dayData.new++;
      if (lead.status === 'contacted') dayData.contacted++;
      if (lead.status === 'converted') dayData.converted++;
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Trends</CardTitle>
        <CardDescription>New leads over the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={last7Days} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="dateStr" 
                axisLine={false}
                tickLine={false}
                className="text-xs fill-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-xs fill-muted-foreground"
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="hsl(262, 83%, 58%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorTotal)"
                name="Total Leads"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
