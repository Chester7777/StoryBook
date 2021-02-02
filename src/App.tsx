import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)


    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input type="password" value={"yo"}/>*/}
            {/*</div>*/}
            {/*<input type="date"/>*/}
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<UnControlledRating value={0}/>*/}

            {/*<Accordion titleValue={"h2"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<UnControlledRating value={4}/>*/}
            <OnOff
                on={switchOn}
                onChange={setSwitchOn}
            />
            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}/>
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledRating/>
            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

export function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
