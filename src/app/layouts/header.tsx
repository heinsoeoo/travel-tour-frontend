import NavItem from "@/components/navItem";
import Image from "next/image";

export default function Header() {
    const leftNavItems = [
        "Home",
        "Tour",
        "Destination",
        "Activities",
        "Pages",
        "Contact"
    ];

    const rightNavItems = [
        "USD",
        "Help",
        "Sign Up",
        "Login",
    ];

    
    return (
        <div className="w-full h-24">
            <div className="absolute w-full">
                <div className="mx-[250px]">
                    <div className="w-full flex flex-nowrap gap-x-[20px] items-center justify-between">
                        <div className="flex-1 flex flex-nowrap items-center my-[20px]">
                            <Image src={"/logo.png"} alt="Logo" width={150} height={29}/>
                            <div className="flex items-center h-[29px] ml-[20px]">
                                {leftNavItems.map((item, index) => (
                                    <NavItem key={index} item={{name: item, color: "text-[#000]"}} />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 items-center my-[20px]">
                            <div className="flex items-center h-[29px]">
                                {rightNavItems.map((item, index) => (
                                    <NavItem key={index} item={{name: item, color: "text-[#fff]"}} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-[350px] flex items-center justify-center">
                        <div className="flex gap-0 flex-col justify-start w-full">
                            <span className="text-[14px] font-[200]">Search, compare and book 15,000+ multiday tours all over the world.</span>
                            <div className="flex flex-col justify-start w-full text-[40px] font-[500]">
                                <span>Search Your Next</span>
                                <span className="text-[#4A43C4]">Holiday</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src="/header_banner.png"
                    alt="Logo"
                    width={1920}
                    height={760}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}