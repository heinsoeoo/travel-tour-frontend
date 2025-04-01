import Image from "next/image";

export default function TrendingDestinations() {
    
    const trendingDestinations = [
        {
            name: "Bali",
            image: "/destinations/bali.png",
            count: "100+",
        },
        {
            name: "Bali",
            image: "/destinations/bali.png",
            count: "100+",
        },
        {
            name: "Bali",
            image: "/destinations/bali.png",
            count: "100+",
        },
        {
            name: "Bali",
            image: "/destinations/bali.png",
            count: "100+",
        },
        {
            name: "Bali",
            image: "/destinations/bali.png",
            count: "100+",
        }
    ];

    return (
        <>
            {/* Heading */}
            <div className="mt-[100px] flex justify-between items-center">
                <span className="text-[22px] font-[600]">Trending Destinations</span>
                <span className="text-[12px] font-[200]">See all</span>
            </div>

            {/* Trending destination list */}
                        <div className="mt-[50px] flex justify-between items-center">
                            {trendingDestinations.map((destination, index) => (
                                <div key={index} className="relative flex flex-col gap-[15px] w-[180px]">
                                    <Image 
                                        src={destination.image}
                                        alt={destination.name}
                                        width={180}
                                        height={250}
                                    />
                                    <div className="absolute bottom-[18px] flex gap-[3px] flex-col justify-center items-center w-full h-[50px] text-[#FFF]">
                                        <span className="text-[16px] font-[400]">{destination.name}</span>
                                        <span className="text-[12px] font-[200]">{destination.count} Tours</span>
                                    </div>
                                </div>
                            ))}
                        </div>
        </>
    );
}