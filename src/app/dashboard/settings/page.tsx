import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getUser } from '@/shared/actions/user'

import { Export } from '@/features/settings/components/cards/export'
import { General } from '@/features/settings/components/cards/general'
import { Identities } from '@/features/settings/components/cards/identities'
import { DangerZone } from '@/features/settings/components/cards/danger-zone'

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
    <div className='p-6 container'>
      <h1 className='text-2xl font-bold mb-4'>Account Settings</h1>
      <p className='text-gray-600'>Manage your account settings here.</p>
      <section className='grid gap-8 mt-8 bg-amber-100'>
        <General user={user} />
        <Identities user={user} />
        <Export />
        <DangerZone />
      </section>
    </div>
  )
}
