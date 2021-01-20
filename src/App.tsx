import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Accordion/Rating/Rating";
import OnOff from "./components/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";


function App() {
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input type="password" value={"yo"}/>*/}
            {/*</div>*/}
            {/*<input type="date"/>*/}
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My frends"}/>*/}
            {/*Article 1*/}
            {/*<UnControlledRating value={0}/>*/}
            {/*<Accordion titleValue={"b"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"h2"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<UnControlledRating value={4}/>*/}

            <OnOff/>
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledRating />

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
