import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getUser } from '@/shared/actions/user'

import { Export } from '@/features/settings/components/cards/export'
import { General } from '@/features/settings/components/cards/general'
import { Identities } from '@/features/settings/components/cards/identities'
import { DangerZone } from '@/features/settings/components/cards/danger-zone'
import { TitleDescription } from '@/shared/components/title-description'

export const metadata: Metadata = {
  title: 'Shortly - Settings',
  description: 'Settings for the account',
}

export default async function SettingsPage() {
  const user = await getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className='container '>
      <TitleDescription
        title='Account Settings'
        description='Manage your account settings here.'
      />
      <section className='grid gap-3 sm:gap-4 lg:gap-6'>
        <General user={user} />
        <Identities user={user} />
        <Export />
        <DangerZone />
      </section>
    </div>
  )
}
