import { User, UserIdentity } from '@supabase/supabase-js'

import { Separator } from '@/shared/components/ui/separator'
import { GithubLogo, GoogleLogo } from '@/shared/components/icons'
import { Card, CardContent, CardTitle } from '@/shared/components/ui/card'

export function Identities({ user }: { user: User }) {
  const PROVIDER_ICONS = {
    github: { icon: GithubLogo, name: 'GitHub' },
    google: { icon: GoogleLogo, name: 'Google' },
  }

  return (
    <Card>
      <CardTitle>Account Identities</CardTitle>
      <Separator />
      <CardContent className='space-y-4'>
        {user?.identities?.map((identity: UserIdentity) => {
          const provider = identity?.provider as keyof typeof PROVIDER_ICONS
          const ProviderIcon = PROVIDER_ICONS[provider].icon
          const providerName = PROVIDER_ICONS[provider].name

          return (
            <section
              key={provider}
              className='flex gap-4 items-center'
            >
              {ProviderIcon ? <ProviderIcon className='size-8' /> : null}
              <div className='flex flex-col'>
                <p className='font-semibold'>{providerName}</p>
                <div className='flex text-muted-foreground space-x-1'>
                  <p className='text-sm'>{user?.user_metadata.user_name}</p>
                  <span>•</span>
                  <p className='text-sm'>{identity?.identity_data?.email}</p>
                </div>
              </div>
            </section>
          )
        })}
      </CardContent>
    </Card>
  )
}
