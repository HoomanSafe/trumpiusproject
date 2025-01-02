import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ride the sleigh of profits with
              <div className="text-red-500">$Santa Claus</div>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Celebrate the spirit of giving with SantaClaus - the festive token
              that brings joy to your wallet this Christmas season! Built on the
              Solana blockchain, SantaClaus is designed for fun, community
              engagement, and exponential growth.
            </p>
            <div className="flex gap-4 pt-4">
            <Link href="">
  <Button 
    size="lg"
    className="bg-gradient-to-r from-red-500 via-green-500 to-black hover:from-red-600 hover:via-green-600 hover:to-gray-200 text-white border border-red-500/20 px-8 flex items-center"
  >
    <img 
      src="./img/pumpfun.png" 
      alt="Icon" 
      className="w-6 h-6 mr-2" 
    />
    Buy Now
  </Button>
</Link>
              <Button 
                variant="outline" 
                size="lg"
                className="text-gold border-gray-600 hover:bg-gray-800 px-8"
              >
                Explore Santa
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/img/santaclaus.png?height=500&width=500"
              alt="Santa NFT Preview"
              className="w-full max-w-lg mx-auto transform rotate-6 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
