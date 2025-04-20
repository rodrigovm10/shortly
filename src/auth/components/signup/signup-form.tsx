import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SignUpForm() {
  return (
    <form className='grid gap-4'>
      <div className='grid gap-4'>
        <Label>Name</Label>
        <Input placeholder='John Doe' />
      </div>
      <div className='grid gap-4'>
        <Label>Email</Label>
        <Input placeholder='name@example.com' />
      </div>
      <div className='grid gap-4'>
        <Label>Password</Label>
        <Input placeholder='********' />
      </div>
      <Button
        type='submit'
        className='w-full'
      >
        Create Account
      </Button>
    </form>
  )
}
