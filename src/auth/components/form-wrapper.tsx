export function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='container flex w-screen flex-col mt-10 items-center '>
      <div className='mx-auto flex max-w-md flex-col justify-center space-y-6 sm:w-[350px] duration-500 animate-in fade-in-10 slide-in-from-bottom-5'>
        {children}
      </div>
    </div>
  )
}
