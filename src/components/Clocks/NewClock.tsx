import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogViewClock";
import {DigitalClockView} from "./DigitalClockView";


type PropsType = {
    mode?: "digital" | "analog"
}



const NewClock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    //Рефакторинг. убираем переменные
    // let hoursFormat = get2digitsString(date.getHours());
    // let minutesFormat = get2digitsString(date.getMinutes());
    // let secondsFormat = get2digitsString(date.getSeconds());
    let view;
    switch (props.mode) {
        case "analog":
        return view = <AnalogClockView date={date} />
        case "digital":
        default:
            return view = <DigitalClockView date={date}/>
    }

            return <div>
                {view}
            </div>
}

export default NewClock;

//типы для твух компонент analog и digital
export type ClockViewPropsType = {
    date: Date
}

