import { AuthFooter } from '@/auth/components/auth-footer'
import { SocialLogin } from '@/auth/components/social-login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { TypographyH1, TypographyH2 } from '@/components/ui/typography-H1'

export default function SignInPage() {
  return (
    <>
      <section className='flex flex-col space-y-2 text-center mb-2'>
        <TypographyH2 className=' font-semibold tracking-tight'>Sign In</TypographyH2>
        <p className='text-sm text-muted-foreground'>
          Enter your email and password to sign in to your account
        </p>
      </section>

      <form className='grid gap-4'>
        <div className='grid gap-4'>
          <Label>Email</Label>
          <Input />
        </div>
        <div className='grid gap-4'>
          <Label>Password</Label>
          <Input />
        </div>
        <Button
          type='submit'
          className='w-full'
        >
          Create Account
        </Button>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <Separator className='w-full' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <SocialLogin />
      <AuthFooter
        title="Don't have an account?"
        redirectTo='/signup'
        textRedirectTo='Sign Up'
      />
    </>
  )
}
