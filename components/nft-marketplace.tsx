import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NftMarketplace() {
  const nfts = [
    {
      id: "AE140",
      image: "/img/nft1.jpg?height=400&width=400",
      owner: "Dmitri Romano",
      currentBid: "5 SOL"
    },
    {
      id: "AE145",
      image: "/img/nft2.jpg?height=400&width=400",
      owner: "Dmitry Ivanovky",
      currentBid: "6 SOL"
    },
    {
      id: "AE157",
      image: "/img/nft3.jpg?height=400&width=400",
      owner: "Dmitri Petrovsky",
      currentBid: "8 SOL"
    },
    {
      id: "AE172",
      image: "/img/nft4.jpg?height=400&width=400",
      owner: "Mikael Lasol",
      currentBid: "9 SOL"
    },
    {
      id: "AE149",
      image: "/img/nft5.jpg?height=400&width=400",
      owner: "Elyas Frove",
      currentBid: "3 SOL"
    },
    
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          NFTs Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scroll">
          {nfts.map((nft) => (
            <Card key={nft.id} className="bg-[#1A1A1A] border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={nft.image}
                    alt={`Santa NFT ${nft.id}`}
                    className="w-full aspect-square object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="/img/wallet.png?height=24&width=24"
                      alt="Owner"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-gray-400 text-sm">
                      Owner
                    </span>
                    <span className="text-white text-sm">
                      {nft.owner}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-400 text-sm">Current Bid {nft.currentBid}</div>
                      <div className="text-white font-semibold">#{nft.id}</div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
  <div className="flex gap-4 animate-scroll">
    {[...Array(20)].map((_, i) => {
      const texts = ["Mikhail Antonov", "Ivan Dubrovich", "Pavel Morozov", "Sergey Lavrov", "Aleksandr Voronov"];
      const randomText = texts[i % texts.length]; // Cycle through the texts
      return (
        <div
          key={i}
          className="flex items-center gap-2 bg-[#2A1A1A] px-4 py-2 rounded-lg"
        >
          <img
            src="/img/santaclaus.png?height=20&width=20"
            alt="NFT Icon"
            className="w-5 h-5"
          />
          <span className="text-white whitespace-nowrap">{randomText}</span>
        </div>
      );
    })}
  </div>
</div>
    </section>
  )
}

