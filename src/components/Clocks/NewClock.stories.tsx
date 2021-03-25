import React, {useEffect, useState} from "react";
import NewClock from "./NewClock";

export default {
    title: "New clock demo"
}

export const NewClockAnalogExample = () => {

    return <>
        <NewClock mode={"analog"} />

    </>
}
export const NewClockDigitalExample = () => {

    return <>
        <NewClock mode={"digital"} />

    </>
}
