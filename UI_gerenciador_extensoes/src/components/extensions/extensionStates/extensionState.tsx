import ExtensionStatus from "./extensionStatus";
import { useFilter } from "../../../store/useFilter";

export default function ExtensionState (){
    const {setFilter , filter} = useFilter();
    const {currentTheme} = useFilter();


    return (
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <h2 className={`text-3xl font-semibold ${currentTheme === 'dark' ? 'text-white/90' : 'text-black'} text-shadow-2xl`}>Extensions List</h2>

            <section className="flex flex-row gap-2">
                <ExtensionStatus name={'All'} isClick={() => setFilter('All')} isActive={filter === 'All'} />
                <ExtensionStatus name={'Active'} isClick={() => setFilter('Active')} isActive={filter === 'Active'}  />
                <ExtensionStatus name={'Inactive'} isClick={() => setFilter('Inactive')} isActive={filter === 'Inactive'}  />
            </section>
        </section>
    )
}