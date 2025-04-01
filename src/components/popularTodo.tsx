import Image from "next/image";

export default function PopularTodo() {

    // Dummy data
    const popularTodo = [
        {
            name: "City Tours",
            icon: "/popular_tours/city_tour.png",
            count: "100+",
        },
        {
            name: "Cultural Tours",
            icon: "/popular_tours/cultural_tour.png",
            count: "100+",
        },
        {
            name: "Day Cruises",
            icon: "/popular_tours/day_cruises.png",
            count: "100+",
        },
        {
            name: "Bus Tours",
            icon: "/popular_tours/bus_tour.png",
            count: "100+",
        },
        {
            name: "Beach Tours",
            icon: "/popular_tours/beach_tour.png",
            count: "100+",
        },
        {
            name: "Food Tours",
            icon: "/popular_tours/food_tour.png",
            count: "100+",
        }
    ];

    return (
        <>
            {/* Heading */}
            <div className="mt-[100px] flex justify-between items-center">
                <span className="text-[22px] font-[600]">Popular things to do</span>
                <span className="text-[12px] font-[200]">See all</span>
            </div>

            {/* Popular things to do card list */}
            <div className="mt-[50px] flex justify-between items-center">
                {popularTodo.map((todo, index) => (
                    <div key={index} className="flex flex-col items-center w-[135px] h-[150px] bg-[#FAF9FD] rounded-[15px]">
                        <div className="w-[50px] h-[50px] mt-[20px] rounded-full bg-[#FFF] flex items-center justify-center">
                            <Image 
                                src={todo.icon}
                                alt={todo.name}
                                width={25}
                                height={25}
                            />
                        </div>
                        <span className="mt-[20px] text-[14px] font-[200]">{todo.name}</span>
                        <span className="mt-[8px] text-[12px] font-[200]">{todo.count}</span>
                    </div>
                ))}
            </div>
        </>
    );
}