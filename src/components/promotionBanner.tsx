import Image from "next/image";

export default function PromotionBanner() {

    return (
        <div className="mt-[100px] mx-[150px]">
            <div className="absolute mx-[80px] h-[25em] flex items-center justify-start">
                <div className="flex gap-[5px] flex-col w-[45%]">
                    <div className="flex flex-col text-[30px] font-[600]">
                        <span>Grab up to <span className="text-[#4A43C4]">35% off</span> on your favorite Destination</span>
                    </div>
                    <span className="text-[14px] font-[200]">{"Limited time offer, don't miss the opportunity"}</span>
                    <button className="mt-[20px] bg-[#4A43C4] w-[150px] h-[50px] text-[#FFF] rounded-[10px] border-none px-[20px] py-[10px]">
                        <span className="text-[14px] font-[500]">Book Now</span>
                    </button>
                </div>
            </div>
            
            <Image
                src="/promo_bg.png"
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