import {type} from "os";
import {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    // let collapsed = false;
    let [collapsed, setCollapsed] = useState(false);
    // if (collapsed === true) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>Toggle
            </button>

            {!collapsed && <AccordionBody title={"b"}/>}
            {/*<button onClick={() => {setCollapsed(true)}}>Toggle</button>*/}
        </div>
    )
}

//button.onclick = function () {

//     if (collapsed === false) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody title={props.titleValue}/>
//         </div>
//     );
// }

export default UnControlledAccordion;

type AccordionTitlePropsType = {
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    if (props.title === "h2") {
        return (
            <h2>Menu</h2>
        );
    }
    return (
        <h3>Menu</h3>
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

