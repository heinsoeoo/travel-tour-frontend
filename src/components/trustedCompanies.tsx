import Image from "next/image";

export default function TrustedCompanies() {
    const trustedCompanies= [
        {
            name: "amazon",
            image: "/trusted_companies/amazon.png"
        },
        {
            name: "amd",
            image: "/trusted_companies/amd.png"
        },
        {
            name: "dropcam",
            image: "/trusted_companies/dropcam.png"
        },
        {
            name: "logitech",
            image: "/trusted_companies/logitech.png"
        },
        {
            name: "spotify",
            image: "/trusted_companies/spotify.png"
        },
        {
            name: "amazon",
            image: "/trusted_companies/amazon.png"
        }
    ];

    return (
        <>
            <div className="mt-[100px] text-center text-[14px] font-[200]">
                Trusted by world&apos;s best
            </div>
            <div className="flex justify-between items-center mt-[50px]">
                {trustedCompanies.map((company, index) => (
                    <Image
                        key={index}
                        src={company.image}
                        alt={company.name}
                        width={100}
                        height={30}
                        className="mx-[20px]"
                    />
                ))}
            </div>
        </>
    );
}