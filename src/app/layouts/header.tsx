import Image from "next/image";

export default function Header() {
    
    return (
        <div>
            <div className="absolute mx-[250px] h-[40em] flex items-center justify-start">
                <div className="flex gap-0 flex-col justify-start w-full">
                    <span className="text-[14px] font-[200]">Search, compare and book 15,000+ multiday tours all over the world.</span>
                    <div className="flex flex-col justify-start w-full text-[40px] font-[500]">
                        <span>Search Your Next</span>
                        <span className="text-[#4A43C4]">Holiday</span>
                    </div>
                </div>
            </div>
            
            <Image
                src="/header_banner.png"
                alt="Logo"
                width={1920}
                height={760}
                layout="responsive"
                objectFit="contain"
                className="rounded-[15px]"
            />
        </div>
    );
}