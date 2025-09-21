import { Switch } from "@mui/material";
import { RemoveBtn } from "./commonExtensionUI/removeBtn";
import { orange } from "@mui/material/colors";
import styled from "@emotion/styled";
import { useFilter } from "../../../store/useFilter";



const OrangeSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: orange[600],
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: orange[900],
  },
}));


export default function ExtensionItem ({extension , logos}:any){
  const {changeActive} = useFilter();
    return (
        <section className="h-full flex flex-col justify-center bg-gray-800/90 border-solid border-gray-700 border-1 p-5 rounded-2xl shadow-2xl">
          <section className="flex-grow">
            <section className="flex items-start gap-5">
                <img className="w-15 h-15" src={logos}></img>

                <section className="flex flex-col gap-1 mb-6">
                    <p className="text-lg text-white font-semibold text-shadow-xl">{extension.name}</p>
                    <p className="text-sm text-white/50 font-medium">{extension.description}</p>
                </section>
            </section>
          </section>

            <section className="flex justify-between">
                <RemoveBtn name={extension.name}/>
                <OrangeSwitch onChange={() => changeActive(extension.name)}  checked={extension.isActive}/>
            </section>
        </section>
    )
}