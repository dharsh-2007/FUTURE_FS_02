import { LeadStatus } from '@/types/lead';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: LeadStatus;
  className?: string;
}

const statusConfig: Record<LeadStatus, { label: string; className: string }> = {
  new: {
    label: 'New',
    className: 'bg-orange-100 text-orange-700 border-orange-200',
  },
  contacted: {
    label: 'Contacted',
    className: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  },
  converted: {
    label: 'Converted',
    className: 'bg-green-100 text-green-700 border-green-200',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
