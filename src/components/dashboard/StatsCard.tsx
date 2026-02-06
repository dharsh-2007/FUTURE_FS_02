import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: string;
  variant: 'primary' | 'orange' | 'yellow' | 'green';
}

const variantStyles = {
  primary: {
    icon: 'bg-primary/10 text-primary',
    border: 'border-primary/20',
  },
  orange: {
    icon: 'bg-orange-100 text-orange-600',
    border: 'border-orange-200',
  },
  yellow: {
    icon: 'bg-yellow-100 text-yellow-600',
    border: 'border-yellow-200',
  },
  green: {
    icon: 'bg-green-100 text-green-600',
    border: 'border-green-200',
  },
};

export function StatsCard({ title, value, icon: Icon, trend, variant }: StatsCardProps) {
  const styles = variantStyles[variant];

  return (
    <Card className={cn('border-2 transition-shadow hover:shadow-md', styles.border)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            {trend && (
              <p className="mt-1 text-xs text-muted-foreground">{trend}</p>
            )}
          </div>
          <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl', styles.icon)}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
