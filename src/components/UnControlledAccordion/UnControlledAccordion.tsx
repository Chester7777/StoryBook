import React from "react";
import {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type UnControlledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UnControlledAccordion = React.memo(UnControlledAccordionMemo)

function UnControlledAccordionMemo(props: UnControlledAccordionPropsType) {
    // let collapsed = false;
    // let [collapsed, setCollapsed] = useState(false);
    // if (collapsed === true) {

    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false});


    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_CONSTANT})}}/>


            {/*<button onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}>Toggle*/}
            {/*</button>*/}

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



type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => {props.onClick()}}>Menu</h3>
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

