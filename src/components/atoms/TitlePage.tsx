
interface TitlePageProps {
    label:string
}

export default function TitlePage({ label }: TitlePageProps){
    return(
        <div className="w-full py-10 bg-[#CBD5E1]">
            <h1 className="font-bold text-center  text-[25px] sm:text-[40px] font-outfit text-[#0F172A]">{label}</h1>
        </div>
    )
}

