import Image from "next/image";
import NavItem from "./navItem";

export default function Navbar() {

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
        <div className="w-full">
            <div className="absolute mx-[250px]">
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
                        <div className="flex items-center justify-end h-[29px]">
                            {rightNavItems.map((item, index) => (
                                <NavItem key={index} item={{name: item, color: "text-[#fff]"}} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}