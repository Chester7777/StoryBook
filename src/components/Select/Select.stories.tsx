import React, {FC, useMemo, useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from "@storybook/react/types-6-0";
import {Select} from "./Select";


export default {
    title: "Select",
    component: Select,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;


export const WithValue = () => {
    const [value, setValue] = useState("")


    return (<>
            <Select value={value}
                    onChange={setValue}
                // onKeyUp={onKeyUp}
                    items={[
                        {value: "1", title: "Moskov"},
                        {value: "2", title: "Minsk"},
                        {value: "3", title: "Kiev"},
                    ]}
            />;
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={[
                        {value: "1", title: "Paris"},
                        {value: "2", title: "Rome"},
                        {value: "3", title: "Berlin"},
                    ]}
            />;
        </>
    )
}

// type StateCantryType = {
//     cantriId: number
//     cantry: string
//     citi: string
// }
//
// const Exemple2ReactMemo = React.memo(Exemple2)
//
// export const Exemple2 = () => {
//     let stateCantry = [
//         {cantriId: 1, cantry: "Belarus", citi: "Minsk"},
//         {cantriId: 2, cantry: "Italien", citi: "Roma"},
//         {cantriId: 3, cantry: "Spanish", citi: "Madrid"},
//     ]
//
//     const [citi, setCiti] = useState("")
//
//     let newStateCantry1 =  useMemo(() => {
//         stateCantry.filter(c => stateCantry[0].cantriId === c.cantriId)
//     }, [stateCantry])
//
//     // let newStateCantry1 = stateCantry.filter(c => stateCantry[0].cantriId === c.cantriId)
//     // let newStateCantry2 = stateCantry.filter(t => stateCantry[].citi.toLowerCase().indexOf("a") -1)
//
//     return (
//         <div>
//             newStateCantry1
//         </div>
//     )
// }