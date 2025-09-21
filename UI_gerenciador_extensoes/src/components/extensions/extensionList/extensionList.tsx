import data from '../../../data/data.json';
import ExtensionItem from './extensionItem';
import { logos } from '../../../data/dataFormat';
import { useFilter } from '../../../store/useFilter';
import { useEffect } from 'react';


export default function ExtensionList (){

    const {items , setItems} = useFilter();

    useEffect(() => {
         setItems(data);
    },[setItems])
   

    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
            {items.map((item) => {

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