import { useFilter } from "../../../store/useFilter";
import ExtensionStatus from "./extensionStatus";

export default function ExtensionState (){
    const {status , handleState} = useFilter();

    return (
        <section className="flex flex-row justify-between items-center">
            <h2 className="text-3xl font-semibold text-white/90 text-shadow-2xl">Extensions List</h2>

            <section className="flex flex-row gap-2">
                <ExtensionStatus name={'All'} isClick={() => handleState('All')} isActive={status === 'All'} />
                <ExtensionStatus name={'Active'} isClick={() => handleState('Active')} isActive={status === 'Active'}  />
                <ExtensionStatus name={'Inactive'} isClick={() => handleState('Inactive')} isActive={status === 'Inactive'}  />
            </section>
        </section>
    )
}