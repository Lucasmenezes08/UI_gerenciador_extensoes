import { FaRegSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { useFilter } from "../../../store/useFilter";

export default function DarkThemeIcon (){
    const {currentTheme , setTheme} = useFilter();

    function handleTheme (){
        if (currentTheme === 'dark'){
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }


    return (
        <button onClick={handleTheme} className={`flex items-center justify-center ${currentTheme === 'dark' ? 'bg-gray-700  text-white/80' : 'bg-gray-200 text-gray-400'} w-8 h-8 rounded-lg cursor-pointer`}>
            {
                currentTheme === 'dark' ? <FaRegSun size={15}/> : <MdDarkMode/>
            }
           
        </button>
    )
}