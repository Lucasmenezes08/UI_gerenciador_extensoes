import { useFilter } from "../../../store/useFilter"

export default function ExtensionStatus ({name , isActive , isClick}:any){
    const {currentTheme} = useFilter();
    const activeClasses = isActive ? 'bg-orange-600 text-black/90 font-medium' : ` ${currentTheme === 'dark' ?'bg-gray-700/90 text-white' : 'bg-white text-black'} font-medium`


    return (
        <button onClick={isClick} className={`flex items-center justify-center px-5 py-1 shadow-2xl rounded-2xl cursor-pointer transition-colors ease-in-out delay-100 ${activeClasses}`}>
            {name}
        </button>
    )
}