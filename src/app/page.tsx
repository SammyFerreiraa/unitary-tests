import Link from 'next/link'
import Button from './components/button/Button'

export default function Home() {
  return (
    <main>
      <h2>Templates</h2>
      <Button>Button</Button>
      <div>
        <h1>Links</h1>
        <Link href="/about">About Page</Link>
      </div>
    </main>
  )
}
