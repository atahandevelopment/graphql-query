import { useState } from "react";


interface CountryObject {
    name: CountryName
}
interface CountryName {
    common: string;
    __typename: string;
}

export default function Results ({data}: any) {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(data && data.length > 10  ? 9 : data.length-1)
    return (
        <div className="mt-4">
            <ul className="mt-4">
           {
                data && data.length > 0 ? data.map((item: CountryObject, index: number) => {
                    return (
                            <li onClick={() => setSelectedTabIndex(index)} className={`h-10 py-2 px-2 flex justify-start gap-10 ${selectedTabIndex === index ? 'bg-red-600 text-white' : ''} rounded-md`}  key={index}>
                               <span>{index+1}</span> 
                               <label style={{ cursor: "pointer"}}>{item?.name?.common}</label>
                            </li>
                    )
                }
                ) : <></>
           }
           </ul>
        </div>
    )
}