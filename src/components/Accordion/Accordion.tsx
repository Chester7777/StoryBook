import {type} from "os";
import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody />}
        </div>
    );
}


export default Accordion;

type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");

    return (
        <h3 onClick={props.onChange}>-- {props.title} --</h3>

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

