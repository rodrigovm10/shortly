export function TitleDescription({ title, description }: { title: string; description: string }) {
  return (
    <div className='mb-4 sm:mb-6'>
      <h1 className='text-xl sm:text-2xl font-bold'>{title}</h1>
      <p className='text-muted-foreground text-sm sm:text-base'>{description}</p>
    </div>
  )
}
