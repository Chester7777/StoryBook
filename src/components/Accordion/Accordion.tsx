import {type} from "os";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody title={props.titleValue}/>
            </div>
        );
    }
    //button.onclick = function () {

    if (props.collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody title={props.titleValue}/>
        </div>
    );
}

export default Accordion;

type AccordionTitlePropsType = {
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    if (props.title === "h2") {
        return (
            <button id="collapsedMove"><h2>Menu</h2></button>
        );
    }
    return (
        <button id="collapsedMove"><h3>Menu</h3></button>
    );
}

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    if (props.title === "b") {
        return (

            <ul>
                <li>11</li>
                <li>22</li>
                <li>33</li>
            </ul>

        );
    }
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

