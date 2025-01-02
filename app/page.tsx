import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { NftMarketplace } from '@/components/nft-marketplace'
import { StakingRewards } from '@/components/staking-rewards'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <div className="bg-gradient-to-b from-[#4A0000] to-transparent">
        <Header />
        <Hero />
      </div>
      <NftMarketplace />
      <StakingRewards />
      <Footer />
    </main>
  )
}

