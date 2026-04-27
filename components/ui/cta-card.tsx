import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      title,
      subtitle,
      description,
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden rounded-none border border-white/10 bg-black/20 text-foreground shadow',
          'flex flex-col md:flex-row',
          className
        )}
        {...props}
      >
        <div className="w-full md:w-1/3">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-56 w-full object-cover md:h-full"
          />
        </div>
        <div className="flex w-full flex-col justify-center p-6 md:w-2/3 md:p-8">
          <div>
            <p className="text-sm font-semibold text-foreground/70">{title}</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
              {subtitle}
            </h2>
            <p className="mt-4 text-foreground/80">{description}</p>
            <div className="mt-6">
              <Button size="lg" onClick={onButtonClick}>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = 'CtaCard';

export { CtaCard };
