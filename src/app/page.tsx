import { prisma } from '@/database/client'

export default async function Home() {
  const urls = await prisma.shortUrl.findMany()

  return <div>{JSON.stringify(urls)}</div>
}
