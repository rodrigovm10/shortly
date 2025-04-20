import { cn } from '@/lib/utils'

export const TypographyH1 = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentProps<'h1'>) => {
  return (
    <h1
      ref={ref}
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export const TypographyH2 = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentProps<'h2'>) => {
  return (
    <h2
      ref={ref}
      className={cn('scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export const TypographyH3 = ({
  children,
  className,
  ref,
  ...props
}: React.ComponentProps<'h3'>) => {
  return (
    <h3
      ref={ref}
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export const TypographyP = ({ children, className, ref, ...props }: React.ComponentProps<'p'>) => {
  return (
    <p
      ref={ref}
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  )
}
