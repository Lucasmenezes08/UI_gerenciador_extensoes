import { FaRegSun } from "react-icons/fa";

export default function DarkThemeIcon (){
    return (
        <button className="flex items-center justify-center bg-gray-700 w-8 h-8 rounded-lg text-white/80 cursor-pointer">
            <FaRegSun size={15}/>
        </button>
    )
}