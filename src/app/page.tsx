import Link from 'next/link'
import Button from './components/button/Button'
import GreatingContainer from './components/greeting-container/GreatingContainer'

export default function Home() {
  return (
    <main>
      <h1>Templates</h1>
      <Button>Button</Button>
      <div>
        <Link href="/about">About Page</Link>
        <GreatingContainer />
      </div>
    </main>
  )
}
