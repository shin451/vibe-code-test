import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * DESIGN.md §4.2 — rectangular (radius-sm), uppercase 13px label, +0.12em
 * tracking. One primary per section, max. No shadows.
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Primary — main CTAs; darkens to espresso on hover (~8% darker)
        primary: 'bg-terracotta text-on-dark hover:bg-espresso',
        // Dark — secondary solid; lightens slightly on hover
        dark: 'bg-espresso text-on-dark hover:bg-terracotta',
        // Ghost-light — on dark photos; hairline clay border
        ghostLight: 'border border-clay bg-transparent text-on-dark hover:bg-on-dark/10',
        // Text link — inline with arrow; shifts to terracotta on hover
        link: 'px-0 text-ink hover:text-terracotta [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1',
      },
      size: {
        default: 'px-7 py-4',
        sm: 'px-5 py-3',
        link: 'p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    // Text-link variant ignores box padding regardless of size.
    const resolvedSize = variant === 'link' ? 'link' : size;
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
