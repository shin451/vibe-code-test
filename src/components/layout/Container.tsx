import * as React from 'react';
import { cn } from '@/lib/utils';

/** Centres content at --maxw (1280px) with 24px → 64px responsive gutters. */
export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-rb', className)} {...props} />;
}
