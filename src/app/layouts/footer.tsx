export default function Footer() {

    const contactData = [
        "328 Queensberry Street, North Melbourne VIC3051, Australia.",
        "hi@viatours.com"
    ];

    const companyData = [
        "About",
        "Tours Reviews",
        "Contact Us",
        "Travel Guides",
        "Data Policy",
        "Cookie Policy",
        "Legal",
        "Sitemap",
    ];

    const supportData = [
        "Get in Touch",
        "Help Center",
        "Live chat",
        "How it works",
    ];

    return (
        <div className="mx-[250px] mt-[50px]">
            <div className="flex flex-row px-10 justify-between items-center text-[14px]">
                <span>
                    Speak to our expert at<span className="text-[#4A43C4]">1-800-453-6744</span>
                </span>
                <span>
                    Follow Us
                </span>
            </div>
            <div className="border-t-[0.5px] border-[#EB662B] mt-[50px] pt-[50px]">
                <div className="flex gap-x-[6%] flex-row justify-between">
                    <div className="basis-[35%] flex flex-col gap-y-[10px]">
                        <h1 className="text-[16px] font-[400] mb-[20px]">Contact</h1>
                        {contactData.map((item, index) => (
                            <span key={index} className="text-[13px] font-[200]">{item}</span>
                        ))}
                    </div>
                    <div className="basis-[10%] flex flex-col gap-y-[10px]">
                        <h1 className="text-[16px] font-[400] mb-[20px]">Company</h1>
                        {companyData.map((item, index) => (
                            <span key={index} className="text-[13px] font-[400]">{item}</span>
                        ))}
                    </div>
                    <div className="basis-[10%] flex flex-col gap-y-[10px]">
                        <h1 className="text-[16px] font-[400] mb-[20px]">Support</h1>
                        {supportData.map((item, index) => (
                            <span key={index} className="text-[13px] font-[400]">{item}</span>
                        ))}
                    </div>
                    <div className="basis-[25%] flex flex-col gap-y-[10px]">
                        <h1 className="text-[16px] font-[400] mb-[20px]">Newsletter</h1>
                        <span className="text-[13px] font-[200]">
                        Subscribe to the free newsletter and stay up to date
                        </span>
                        
                        <div>
                            <div className="flex border border-[#E7E6E6] rounded-lg">
                                <input type="text" id="subscribe_btn" placeholder="Your email address" className="py-3 px-5 block w-full text-xs font-thin" />
                                <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-[2px] text-xs font-thin">
                                    Button
                                </button>
                            </div>
                        </div>

                        <h1 className="text-[16px] font-[400] mb-[20px]">Mobile Apps</h1>
                        <span className="text-[13px] font-[200]">
                            iOS App
                        </span>
                        <span className="text-[13px] font-[200]">
                            Android App
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}