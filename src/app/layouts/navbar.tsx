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
            <div className="absolute mx-[250px] z-100">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center my-[5px]">
                        <Image src={"/logo.png"} alt="Logo" width={150} height={29}/>
                        <div className="flex items-center h-[60px] ml-[20px]">
                            {leftNavItems.map((item, index) => (
                                <NavItem key={index} item={{name: item, color: "text-black"}} />
                            ))}
                        </div>
                    </div>
                    <div className="items-center my-[5px]">
                        <div className="flex items-center justify-end h-[60px]">
                            {rightNavItems.map((item, index) => (
                                (item == "Login") ? (
                                    <div key={index} className={`items-center text-center cursor-pointer w-[5.3em] font-[200]`}>
                                        <button type="button" className="cursor-pointer bg-transparent border border-[#FFF] hover:border-[#EB662B] text-white hover:text-[#EB662B] rounded-3xl text-[13px] px-4 py-2">
                                            {item}
                                        </button>
                                    </div>
                                ) : (
                                    <NavItem key={index} item={{name: item, color: "text-white"}} />
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}