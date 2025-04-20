import { FormFooter } from '@/auth/components/form-footer'
import { FormHeader } from '@/auth/components/form-header'
import { FormWrapper } from '@/auth/components/form-wrapper'
import { SocialLogin } from '@/auth/components/social-login'
import { FormSeparator } from '@/auth/components/form-separator'
import { SignUpForm } from '@/auth/components/signup/signup-form'

export default function SignUpPage() {
  return (
    <FormWrapper>
      <FormHeader
        title='Create an account'
        description='Enter your information to create an account'
      />
      <SignUpForm />
      <FormSeparator />
      <SocialLogin />
      <FormFooter
        title='Already have an account?'
        redirectTo='/signin'
        textRedirectTo='Sign In'
      />
    </FormWrapper>
  )
}
