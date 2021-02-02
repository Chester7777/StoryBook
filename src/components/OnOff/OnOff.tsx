import React, {useState} from "react";


type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "1px",
        padding: "2px",
        marginTop: "10px",
        marginLeft: "20px",
        backgroundColor: props.on ? "green" : "white"


    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "1px",
        padding: "2px",
        marginTop: "20px",
        backgroundColor: props.on ? "white" : "red"

    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

