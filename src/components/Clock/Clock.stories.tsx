import React, {useEffect, useState} from "react";

export default {
    title: "ClockExample demo"
}

export const ClockExample = () => {
    const clock = new Date()
    let seconds = clock.getSeconds();
    let minutes = clock.getMinutes();
    let hours = clock.getHours();



    const [second, setSecond] = useState(seconds);
    const [minute, setMinute] = useState(minutes)
    const [hour, setHour] = useState(hours)

    console.log("ClockExample")



    useEffect(() => {
        setInterval(() => {
            setSecond(state => state + 1)
        }, 1000)
    }, [second])

    useEffect(() => {
        setInterval(() => {
            setMinute(state => state + 1)
        }, 60000)
    }, [minute])

    useEffect(() => {
        setInterval(() => {
            setHour(state => state + 1)
        }, 600000)
    }, [hour])


    return <>
        <h1>My clock: {hour}:{minute}:{hour}</h1>

    </>
}
