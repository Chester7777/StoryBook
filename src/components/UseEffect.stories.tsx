import React, {useEffect, useState} from "react";

export default {
    title: "useУааусе demo",
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [face, setFace] = useState(1)

    console.log("SimpleExample")

    //этот useEffect вызоветсяпри каждой отрисовки компоненты
    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    //этот useEffect вызовется при только один раз (по типу componentDidMount)
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, [])
    //этот useEffect вызовется при первой отрисовки компоненты и затем при каждом изменении counter
    useEffect(() => {
        console.log("useEffect first render and every change counter")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}, {face}
        <button onClick={() => setFace(face + 1)}>face+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    const [face, setFace] = useState(1)

    console.log("SetTimeoutExample")

    //этот useEffect вызоветсяпри каждой отрисовки компоненты
    // useEffect(() => {
    //     console.log("useEffect every render")
    //     document.title = counter.toString()
    // })

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])


    return <>
        Hello, {counter}, {face}
        <button onClick={() => setFace(face + 1)}>face+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}
export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    const [face, setFace] = useState(1)

    console.log("SetIntervalExample")

    //этот useEffect вызоветсяпри каждой отрисовки компоненты
    // useEffect(() => {
    //     console.log("useEffect every render")
    //     document.title = counter.toString()
    // })

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter: {counter}, face: {face}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("ResetEffectExample")

    //этот useEffect вызовется при каждой отрисовки компоненты
    useEffect(() => {
        console.log("render component")

        return () => {
            console.log("clean effect")
        }
    }, [])
    let callback = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, {counter}: <button onClick={callback}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");

    console.log("KeysTrackerExample" + text)

    //этот useEffect вызовется при каждой отрисовки компоненты
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(text + e.key)
        }
        console.log("render component")
        window.addEventListener("keypress", handler)

        //убивает отрисовку компоненты (зачищает)
        return () => {
            window.addEventListener("keypress", handler)
        }
    }, [text])

    return <>
        My text: {text}

    </>
}




