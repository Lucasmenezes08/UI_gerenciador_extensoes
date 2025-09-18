import data from '../../../data/data.json';
import ExtensionItem from './extensionItem';
import { logos } from '../../../data/dataFormat';


export default function ExtensionList (){

    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
            {data.map((item) => {

            const logosSrc = logos[item.name]
                
            return (
                <section className='' key={item.name}>
                    <ExtensionItem extension={{...item }} logos={logosSrc}/>
                </section>
            )

            })}
        </section>
    )
}