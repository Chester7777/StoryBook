import React, {useState} from "react";

export default {
    title: "React.memo demo"
}


const NewMessagesCounter = (props: { count: number }) => {
    return <div>
        {props.count}
    </div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}


const Users = React.memo(UsersSecret);


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(["Dimich", "Anton", "Oly", "Sasha", "Zhanna"])
    const OnClickHandler = () => setCounter(counter + 1);
    const AddUser = () => {
       const newUser = [...user, "Sveta" + new Date().getTime()]
        setUser(newUser);
    }

    return <>
        <button onClick={OnClickHandler}>+</button>
        <button onClick={AddUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={user}/>
    </>
}

