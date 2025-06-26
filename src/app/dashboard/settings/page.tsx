import { getUser } from '@/shared/actions/user'

import { Label } from '@/shared/components/ui/label'
import { Button } from '@/shared/components/ui/button'
import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'
import { Download, HeartCrack } from 'lucide-react'
import { General } from '@/features/settings/components/cards/general'
import { Identities } from '@/features/settings/components/cards/identities'
import { redirect } from 'next/navigation'
import { Export } from '@/features/settings/components/cards/export'
import { DangerZone } from '@/features/settings/components/cards/danger-zone'

export default async function SettingsPage() {
  const user = await getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className='p-6 container'>
      <h1 className='text-2xl font-bold mb-4'>Account Settings</h1>
      <p className='text-gray-600'>Manage your account settings here.</p>
      <section className='grid gap-8 mt-8'>
        <General user={user} />
        <Identities user={user} />
        <Export />
        <DangerZone />
      </section>
    </div>
  )
}
