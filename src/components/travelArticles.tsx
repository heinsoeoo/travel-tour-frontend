import Image from "next/image";

export default function TravelArticles() {

    const travelArticles = [
        {
            title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
            image: "/articles/kenya_safari.png",
            date: "2023-10-01",
            author: "John Doe",
        },
        {
            title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
            image: "/articles/kenya_safari.png",
            date: "2023-10-01",
            author: "John Doe",
        },
        {
            title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
            image: "/articles/kenya_safari.png",
            date: "2023-10-01",
            author: "John Doe",
        }
    ];

    return (
        <>
            {/* Heading */}
            <div className="mt-[50px] flex justify-between items-center">
                <span className="text-[22px] font-[600]">Trending Destinations</span>
                <span className="text-[12px] font-[200]">See all</span>
            </div>

            {/* Travel articles list */}
            <div className="mt-[50px] flex gap-6 justify-between items-center">
                {travelArticles.map((article, index) => (
                    <div key={index} className="basis-1/3 flex flex-col gap-[15px] w-[230px]">
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full rounded-[10px]"
                        />
                        <div className="flex gap-2 items-center text-[12px] font-[200px] text-[#717171]">
                            <span>{article.date}</span>
                            <div className="w-1 h-4 border-r-[1px] border-[#E7E6E6]"></div>
                            <span>{article.author}</span>
                        </div>
                        <span className="text-[16px]">{article.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
}