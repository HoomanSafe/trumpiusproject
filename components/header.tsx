import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="" className="flex items-center gap-2">
              <img
                src="/img/santaclaus.png?height=40&width=40"
                alt="SantaClaus Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white text-xl font-bold">SantaClaus</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="" className="text-white hover:text-red-400">
                Home
              </Link>
              <Link href="" className="text-white hover:text-red-400">
                About
              </Link>
              <Link href="" className="text-white hover:text-red-400">
                NFTs
              </Link>
              <Link href="" className="text-white hover:text-red-400">
                Staking
              </Link>
            </nav>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
            Connect
          </Button>
        </div>
      </div>
    </header>
  )
}

