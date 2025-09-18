import { IoExtensionPuzzleOutline } from "react-icons/io5";
import DarkThemeIcon from "./darktheme/darkThemeIcon";

export default function Header (){
    return (
        <section className="flex justify-between items-center w-full h-13 bg-gray-800 rounded-xl px-3 py-2">
            <section className="flex flex-row items-center justify-center gap-2">
                <IoExtensionPuzzleOutline size={30} className="text-orange-600"/>
                <p className="text-md font-semibold text-white/90 text-shadow-2xl">Extensions</p>
            </section>

            <section>
                <DarkThemeIcon/>
            </section>
            
        </section>
    )
}