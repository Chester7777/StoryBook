import React, {useState} from "react";
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


   return ( <>
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