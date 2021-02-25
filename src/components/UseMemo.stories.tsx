import React, {useState} from "react";


export default {
    title: "useMemo"
}

export const Exemple1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 5
    let resultB = 5

    for (let i = 1; i <= resultA; i++) {
        resultA = resultA * i
    }
    for (let i = 1; i <= resultB; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} type="text"/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} type="text"/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}