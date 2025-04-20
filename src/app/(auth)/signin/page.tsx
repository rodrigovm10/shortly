import { FormFooter } from '@/auth/components/form-footer'
import { FormHeader } from '@/auth/components/form-header'
import { SocialLogin } from '@/auth/components/social-login'
import { FormWrapper } from '@/auth/components/form-wrapper'
import { FormSeparator } from '@/auth/components/form-separator'
import { SignInForm } from '@/auth/components/signin/signin-form'

export default function SignInPage() {
  return (
    <FormWrapper>
      <FormHeader
        title='Sign In'
        description='Enter your email and password to sign in to your account'
      />
      <SignInForm />
      <FormSeparator />
      <SocialLogin />
      <FormFooter
        title="Don't have an account?"
        redirectTo='/signup'
        textRedirectTo='Sign Up'
      />
    </FormWrapper>
  )
}
