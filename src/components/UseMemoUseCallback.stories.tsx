import React, {useCallback, useMemo, useState} from "react";


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


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["JS", "HTML", "React", "CSS"])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newUsers = [...books, "Angular" + new Date().getTime()];
        setBooks(newUsers)
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, books)
    //второй вариант меморизировать через useCallback
    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, "Angular" + new Date().getTime()];
        setBooks(newUsers)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addBook()}>add book</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook}/>

    </>
}


type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
    </div>
}

const Book = React.memo(BooksSecret)