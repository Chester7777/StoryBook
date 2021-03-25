import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {Select} from "./components/Select/Select";
import NewClock from "./components/Clocks/NewClock";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    let [selectValue, setSelectValue] = useState<string>("1")
    const items = [
        {value: "1", title: "Moskov"},
        {value: "2", title: "Minsk"},
        {value: "3", title: "Kiev"},
    ]


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

            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledRating onChange={setRatingValue} defaultValue={ratingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Select value={selectValue} onChange={setSelectValue} items={items}/>
            <NewClock mode={"analog"}/>
            <NewClock mode={"digital"}/>
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
