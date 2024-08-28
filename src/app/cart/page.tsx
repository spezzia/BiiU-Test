import TitlePage from "@/components/atoms/TitlePage";
import ListCardProducts from "@/components/organisms/ListCartProducts";



export default function PageCart(){
    return(
        <main className="w-full">
             <TitlePage label="Shopping cart"/>
             <div className="h-[40px]"/>
             <ListCardProducts/>
        </main>
    )
}
