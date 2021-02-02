import {type} from "os";
import React from "react";

export type AccordionPropsType = {
    titleValue: string
    /**
     * Callback that is called when any item clicked
     */
    collapsed: boolean
    onChange: () => void
    /**
     * optional color oh header text
     */
    color?: string
    // onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitlePropsType =
{
    title: string
    onChange: () => void
    color ? : string
}

function AccordionTitle(props: AccordionTitlePropsType) {
console.log("AccordionTitle rendering");

    return (
        <h3
            style={{color: props.color ? props.color : "black"}}
            onClick={(e) => props.onChange()}>-- {props.title} --</h3>

    );
}


// type AccordionBodyPropsType = {
//     title: number
// }

function AccordionBody() {
    console.log("AccordionBody rendering");

    return (
        <ul>
            <li>11</li>
            <li>22</li>
            <li>33</li>
        </ul>
    );
}

