export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container flex h-screen w-screen flex-col mt-10 items-center '>
      <div className='mx-auto flex max-w-md flex-col justify-center space-y-6 sm:w-[350px]'>
        {children}
      </div>
    </div>
  )
}
