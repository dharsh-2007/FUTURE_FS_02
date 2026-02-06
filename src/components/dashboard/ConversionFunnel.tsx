import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface FunnelStage {
  name: string;
  count: number;
  color: string;
}

interface ConversionFunnelProps {
  stages: FunnelStage[];
  conversionRate: number;
}

export function ConversionFunnel({ stages, conversionRate }: ConversionFunnelProps) {
  const maxCount = Math.max(...stages.map((s) => s.count), 1);

  const getTrendIcon = () => {
    if (conversionRate >= 50) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (conversionRate >= 25) return <Minus className="h-4 w-4 text-yellow-500" />;
    return <TrendingDown className="h-4 w-4 text-orange-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>Lead progression through stages</CardDescription>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
            {getTrendIcon()}
            <span className="text-sm font-semibold">{conversionRate}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{stage.name}</span>
              <span className="text-muted-foreground">{stage.count} leads</span>
            </div>
            <div className="relative h-8 w-full overflow-hidden rounded-lg bg-muted">
              <div
                className="absolute inset-y-0 left-0 rounded-lg transition-all duration-500"
                style={{
                  width: `${(stage.count / maxCount) * 100}%`,
                  backgroundColor: stage.color,
                  minWidth: stage.count > 0 ? '20px' : '0',
                }}
              />
            </div>
            {index < stages.length - 1 && (
              <div className="flex justify-center">
                <div className="h-4 w-px bg-border" />
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
