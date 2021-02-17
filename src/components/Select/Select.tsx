import React, {useEffect, useState} from "react";
import style from "./Select.module.css"

export type ItemType = {
    title: string
    value: string
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = React.memo(SelectMemo)

function SelectMemo(props: SelectPropsType) {
    let [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    let selectedItem = props.items.find(i => i.value === props.value)
    let hoveredValue = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onClickItemsValue = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

//
//  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
//
//     setSelect(e.currentTarget.value)
// }
//  let valueID = () => {

    return (
        <>
            <div className={style.select}>
                <span className={style.main} onClick={toggleItems}>  {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={style.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            onKeyUp={onKeyUp}
                            className={style.item + " " + (hoveredValue === i ? style.selected : "")}
                            onClick={() => {
                                onClickItemsValue(i.value)
                            }}
                            key={i.value}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
            {/*<div onClick={(e: ChangeEvent<HTMLInputElement>) => {props.onChange()}} onChange={onChange} value={selectedItem}>{props.selects[0]}</div>*/}
            {/*{selects.map((t) => <div>{t.title}</div>)}*/}
        </>
    )
}


// export let selects = [
//     {title: "Dimych", id: 1},
//     {title: "Olga", id: 2},
//     {title: "Anton", id: 3},
//     {title: "Zhanna", id: 4}
//     ]
//

//

//









