import React from "react";

export type ItemsType = {
    title: string
    value: any
}

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
    items: ItemsType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo(AccordionMemo)

 function AccordionMemo(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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


export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    );
}

