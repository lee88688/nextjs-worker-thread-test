import Button from './button';
import Cookie from './cookie';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
      <div>
        <Button>
          <Cookie/>
        </Button>
        <Link href={'/test'}>to test</Link>
      </div>
    </main>
  )
}
