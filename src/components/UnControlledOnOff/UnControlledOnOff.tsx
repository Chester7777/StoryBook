import React, {useState} from "react";



type PropsType = {
   onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UnControlledOnOff = React.memo(UnControlledOnOffMemo)

function UnControlledOnOffMemo(props: PropsType, newParam: { border: string; padding: string; margin: string; backgroundColor: string; display: string; width: string; marginTop: string; height: string } = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    margin: "1px",
    padding: "2px",
    marginTop: "20px",
    backgroundColor:  "white"

}) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        margin: "1px",
        padding: "2px",
        marginTop: "10px",
        marginLeft: "20px",
        backgroundColor: on ? "green" : "white"

    }
    const offStyle = newParam
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: on ? "green" : "red"
    }

    const onClick = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClick = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClick}>On
            </div>
            <div style={offStyle} onClick={offClick}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

