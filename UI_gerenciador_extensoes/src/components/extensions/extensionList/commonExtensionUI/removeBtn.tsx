import { useState } from "react";
import { useFilter } from "../../../../store/useFilter"
import RemoveModal from "../../../modals/removeModal";

export function RemoveBtn ({name}:any){
    const {remove , currentTheme} = useFilter();
    const [modalActive , setModalActive] = useState(false);


    function handleModal (modalState:boolean){
        if (modalState){
            setModalActive(true);
        }
        setModalActive(false)
    }

    return (
        <button onClick={() => remove(name)} className={`flex items-center justify-center ${currentTheme === 'dark' ? 'bg-gray-900/70 text-white/80  border-gray-500' : 'bg-gray-100 text-black/80 border-gray-300 ' } px-5 rounded-2xl text-sm border-1 border-solid cursor-pointer`}>
            Remove
        </button>
    )
}