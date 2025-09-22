import { useFilter } from "../store/useFilter"
import ExtensionList from "./extensions/extensionList/extensionList"
import ExtensionState from "./extensions/extensionStates/extensionState"
import Header from "./header/header"

function App() {
  const {currentTheme} = useFilter();
  return (
    <section className={`sm:px-10 md:px-15 lg:px-25 pt-10 pb-10 w-full h-screen flex flex-col bg-linear-to-b ${ currentTheme === 'dark' ? 'from-black/95 to-indigo-950': 'from-sky-50 to-sky-100'} font-sans overflow-auto gap-10 `}>
      <Header/>

      <section>
        <ExtensionState/>
      </section>

      <section className="">
          <ExtensionList/>
      </section>
    
    </section>
  )
}

export default App
