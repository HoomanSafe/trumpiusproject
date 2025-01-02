import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function StakingRewards() {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(13,13,13,0.8), 
              rgba(13,13,13,0.95)
            ),
            url('/img/bgbgbg.jpg?height=800&width=1600')
          `
        }}
      />
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Santa Staking Rewards
        </h2>
        
        <div className="bg-[#1A1A1A]/60 backdrop-blur rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img
                src="/img/usdt.png?height=24&width=24"
                alt="USDT"
                className="w-6 h-6"
              />
              <img
                src="/img/santaclaus.png?height=24&width=24"
                alt="Santa"
                className="w-6 h-6"
              />
              <span className="text-white">USDT-Santa</span>
            </div>
            <div className="text-white">
              High APR <span className="text-green-500">65%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 bg-[#1A1A1A]/60 backdrop-blur rounded-lg p-4">
            <img
              src="/img/santaclaus.png?height=24&width=24"
              alt="Santa Token"
              className="w-6 h-6"
            />
            <Input
              type="number"
              placeholder="Santa Token's"
              className="bg-transparent border-0 text-white placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center gap-2 bg-[#1A1A1A]/60 backdrop-blur rounded-lg p-4">
            <img
              src="/img/usdt.png?height=24&width=24"
              alt="USD Token"
              className="w-6 h-6"
            />
            <Input
              type="number"
              placeholder="USD Token's"
              className="bg-transparent border-0 text-white placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center mb-8">
          Dear investors, make sure you know that the calculation of APY returns can change at any
          time. Please follow updates and check your investment system for maximum results.
        </p>

        <Button 
  className="w-full bg-gradient-to-r from-red-500 via-green-500 to-yellow-400 hover:from-red-600 hover:via-green-600 hover:to-yellow-500 text-white text-lg py-6"
>
  Stake Now
</Button>

      </div>
    </section>
  )
}

