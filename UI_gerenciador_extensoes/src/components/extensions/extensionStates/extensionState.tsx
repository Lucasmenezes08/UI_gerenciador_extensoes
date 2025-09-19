//import { useFilter } from "../../../store/useFilter";
import { useState } from "react";
import ExtensionStatus from "./extensionStatus";

export default function ExtensionState (){
    const [state , setState]:any = useState('All');

    function handleState(state:string){
        setState((st:string) => st = state);
    }

    return (
        <section className="flex flex-row justify-between items-center">
            <h2 className="text-3xl font-semibold text-white/90 text-shadow-2xl">Extensions List</h2>

            <section className="flex flex-row gap-2">
                <ExtensionStatus name={'All'} isClick={() => handleState('All')} isActive={state === 'All'} />
                <ExtensionStatus name={'Active'} isClick={() => handleState('Active')} isActive={state === 'Active'}  />
                <ExtensionStatus name={'Inactive'} isClick={() => handleState('Inactive')} isActive={state === 'Inactive'}  />
            </section>
        </section>
    )
}