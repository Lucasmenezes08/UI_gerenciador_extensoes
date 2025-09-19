import ExtensionList from "./extensions/extensionList/extensionList"
import ExtensionState from "./extensions/extensionStates/extensionState"
import Header from "./header/header"

function App() {

  return (
    <section className="px-25 pt-10 pb-10 w-full h-screen flex flex-col bg-linear-to-b from-black/95 to-indigo-950 font-sans overflow-auto gap-10">
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
