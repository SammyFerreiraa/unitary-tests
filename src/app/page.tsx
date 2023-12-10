import { Button, GreatingContainer } from '@/components'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <h1>Templates</h1>
      <Button disable={false}>Button</Button>
      <div>
        <Link href="/about">About Page</Link>
        <GreatingContainer />
      </div>
    </main>
  )
}
