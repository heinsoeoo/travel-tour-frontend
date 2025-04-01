export default function NavItem({ item }: { item: {name: string; color: string } }) {    
    return (
        <div className={`items-center text-center cursor-pointer w-[5.3em] h-[23px] font-[200]`}>
            <span className={`hover:text-[#EB662B] text-[13px] ${item.color}`}>{item.name}</span>
        </div>
    )
}