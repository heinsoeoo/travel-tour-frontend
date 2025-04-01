import Image from "next/image";

export default function Reviews() {

    const people = [
        {
            name: 'Ali Tufan',
            image: '/reviewers/ali_tufan.png',
        },
        {
            name: 'Nathan',
            image: '/reviewers/nathan.png',
        },
        {
            name: 'Ethan',
            image: '/reviewers/ethan.png',
        },
        {
            name: 'Sophia',
            image: '/reviewers/sophia.png',
        },
        {
            name: 'Isabella',
            image: '/reviewers/isabella.png',
        }
    ];
    
    return (
        <div className="mt-[50px] bg-[#FBFBFB] px-[470px] py-[80px] flex flex-col items-center gap-y-[30px]">
            <div className="text-2xl font-bold text-center">
                Customer Reviews
            </div>
            <Image 
                src={"/semicolon.png"}
                alt="semicolon"
                width={50}
                height={50}
            />
            <p className="text-center text-sm font-thin leading-6">
            The tours in this website are great. I had been really enjoy with my family! The team is very
            professional and taking care of the customers. Will surely recommend to my freind to join
            this company!
            </p>
            <p className="flex flex-col text-center text-sm leading-6">
                Ali Tufan
                <span className="text-center text-xs font-thin">
                    Product Manager, Apple Inc.
                </span>
            </p>

            <div className="flex flex-row gap-x-2">
                {people.map((person, index) => (
                    <div key={index} className="flex p-3 cursor-pointer border border-[1.5px] border-transparent hover:border-[#4A43C4] rounded-full flex-col items-center">
                        <Image
                            src={person.image}
                            alt={person.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}