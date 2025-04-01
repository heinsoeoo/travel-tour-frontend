import Image from "next/image";

export default function FeaturedTrip() {

    const featuredTrips = [
        {
            name: "Centipede Tour - Guided Arizona Desert Tour by ATV",
            location: "Paris, France",
            image: "/featured_trips/centipede_tour.png",
            rating: 4.8,
            reviews: 120,
            price: 199.95,
            duration: "3 days",
        },
        {
            name: "Centipede Tour - Guided Arizona Desert Tour by ATV",
            location: "Paris, France",
            image: "/featured_trips/centipede_tour.png",
            rating: 4.8,
            reviews: 120,
            price: 199.95,
            duration: "3 days",
        },
        {
            name: "Centipede Tour - Guided Arizona Desert Tour by ATV",
            location: "Paris, France",
            image: "/featured_trips/centipede_tour.png",
            rating: 4.8,
            reviews: 120,
            price: 199.95,
            duration: "3 days",
        },
        {
            name: "Centipede Tour - Guided Arizona Desert Tour by ATV",
            location: "Paris, France",
            image: "/featured_trips/centipede_tour.png",
            rating: 4.8,
            reviews: 120,
            price: 199.95,
            duration: "3 days",
        }
    ];

    return (
        <>
            {/* Heading */}
            <div className="mt-[50px] flex justify-between items-center">
                <span className="text-[22px] font-[600]">Featured Trips</span>
                <div className="flex justify-end px-[20px] py-[15px] border rounded-[10px] border-[#E7E6E6]">
                    <span className="text-[12px] font-[200px] ">By Travel Style</span>
                    <span className="w-[30px] h-[20px] ml-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </div>
            </div>

            {/* Popular things to do card list */}
            <div className="mt-[50px] flex justify-between items-center">
                {featuredTrips.map((trip, index) => (
                    <div key={index} className="flex flex-col gap-[15px] w-[230px]">
                        <Image
                            src={trip.image}
                            alt={trip.name}
                            width={230}
                            height={160}
                        />
                        <span className="text-[12px] font-[200px] text-[#717171]">{trip.location}</span>
                        <span className="text-[16px]">{trip.name}</span>
                        <span className="text-[12px] font-[200px] text-[#717171]">{trip.rating}({trip.reviews})</span>
                        <div className="border-[0.5px] border-[#E7E6E6]"></div>
                        <div className="flex justify-between items-center text-[12px] font-[200px]">
                            <span>{trip.duration}</span>
                            <span>
                                From <span className="text-[14px]">${trip.price}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}