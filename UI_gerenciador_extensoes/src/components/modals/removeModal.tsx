import { createPortal } from "react-dom";
import { useFilter } from "../../store/useFilter";

const portalDiv = document.getElementById('removeModal')!

export default function RemoveModal ({onRemove , onClose }:any){

    const {currentTheme} = useFilter();

    return createPortal (
        <dialog className={`w-[40%] h-[30vh] ${currentTheme === 'dark' ? 'bg-gray-800/90 border-solid border-gray-700 border-1' : 'bg-white border-solid border-gray-200 border-1'}`} open onClick={(e) => e.stopPropagation()}>
            <section>
                <h1>Você deseja remover essa extenção?</h1>
                <section>
                    <button onClick={onRemove}>Sim</button>
                    <button onClick={onClose}>Não</button>
                </section>
            </section>
        </dialog>,
        portalDiv
        
    )
}