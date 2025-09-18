import { Switch } from "@mui/material";
import { RemoveBtn } from "./commonExtensionUI/removeBtn";

export default function ExtensionItem ({extension}:any){
    return (
        <section>
            <section>
                <section>
                    {extension.logo}
                </section>

                <section>
                    <p>{extension.name}</p>
                    <p>{extension.description}</p>
                </section>
            </section>

            <section>
                <RemoveBtn/>
                <Switch/>
            </section>
        </section>
    )
}