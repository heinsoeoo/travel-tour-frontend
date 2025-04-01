import Image from "next/image";

export default function SubscribeMail() {

    return (
        <div className="mt-[100px] mx-[150px]">
            <div className="absolute mx-[80px] h-[25em] flex items-center justify-start">
                <div className="flex gap-5 flex-col w-[50%] text-white">
                    <div className="flex flex-col text-[30px] font-[600]">
                        <span>Subscribe To Our Mailing List And Stay Up To Date</span>
                    </div>
                    <span className="text-[14px] font-[200]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    
                    {/* Button */}
                    <div>
                    {/* <label htmlFor="search" className="mb-2 text-sm font-medium text-white sr-only">Your email</label> */}
                    <div className="relative">
                        <input type="search" id="search" className="block w-full bg-[#1f1f4f] p-6 ps-10 text-sm text-[#FFF] text-white rounded-lg" placeholder="Your email" />
                        <button type="submit" className="text-white bg-[#4A43C4] absolute end-2.5 bottom-3 font-medium rounded-lg text-sm px-5 py-3">Subscribe</button>
                    </div>

                    </div>

                </div>
            </div>
            
            <Image
                src="/subscribe.png"
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