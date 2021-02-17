import React, {ChangeEvent, useRef, useState} from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;


export default {
    title: "input",
    // component: input,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;


export const UncontrolledInput = () => <input/>;

export const TrackValueOffOnControlledInput = () => {
    const [value, setValue] = useState("");

    const onChangeClick = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return <> <input value={value} onChange={onChangeClick}/> - {value} </>;
}

export const GetValueOffOnControlledInputButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>;
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const callBack = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={callBack}/>

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const callBack = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={parentValue} onChange={callBack}/>

}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2");
    const callBack = (e:  ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select name="Town" id="5" value={parentValue} onChange={callBack}>
        <option value={"1"}>none</option>
        <option value={"2"} >Minsk</option>
        <option value={"3"} >Moscow</option>
        <option value={"4"} >Berlin</option>
    </select>
}


const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;





