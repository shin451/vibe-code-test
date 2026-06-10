import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * DESIGN.md §4.4 — parchment fill, 1px cream-line border, radius-sm, 14px
 * vertical padding. Focus: border → terracotta, no glow.
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'w-full rounded-sm border border-cream-line bg-parchment px-4 py-[14px] font-sans text-body text-ink-soft outline-none transition-colors placeholder:text-stone/60 focus:border-terracotta',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 5, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      'w-full resize-y rounded-sm border border-cream-line bg-parchment px-4 py-[14px] font-sans text-body text-ink-soft outline-none transition-colors placeholder:text-stone/60 focus:border-terracotta',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Input, Textarea };
