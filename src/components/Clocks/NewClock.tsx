import React, {useEffect, useState} from "react";


type PropsType = {}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num;


const NewClock: React.FC<PropsType> = () => {
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

    return <div>
        <span>
            {get2digitsString(date.getHours())}
        </span>
        :
        <span>
            {get2digitsString(date.getMinutes())}
        </span>
        :
        <span>
            {get2digitsString(date.getSeconds())}
        </span>
    </div>
}

export default NewClock;