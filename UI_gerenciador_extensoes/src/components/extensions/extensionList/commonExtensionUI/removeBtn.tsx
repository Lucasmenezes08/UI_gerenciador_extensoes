import { useFilter } from "../../../../store/useFilter"

export function RemoveBtn ({name}:any){
    const {remove} = useFilter();

    return (
        <button onClick={() => remove(name)} className="flex items-center justify-center bg-gray-900/70 px-5 rounded-2xl text-white/80 text-sm border-1 border-solig border-gray-500 cursor-pointer">
            Remove
        </button>
    )
}