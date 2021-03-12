import React, {useMemo, useState} from "react";

export default {
    title: "useState demo",
}

function generateData () {

console.log("generateData")
    return 25862628;
}

export const Example1 = () => {
    console.log("Exemple1")

    // let initValue = useMemo(generateData, []);
    const changer = (state: number) => {
        return state + 1
    }

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}






