import React from 'react';

let age = 18;

type StudentsType = {
    name: string
}

type StateType = {
    age: number,
    names: Array<StudentsType>
}

export const Students = [
    {name: "Koly"},
    {name: "Oly"},
    {name: "Vika"},
    {name: "Anton"}
];

export const State = {
    age: 22,
    names: [{
        name: "Oly",
        age: "18"
    }]
}

let a = 5;
let b = 10;

type SumType = {
    a: number,
    b: number
}

type ShowTeamNameType = {
    name: string
}
//
function  ShowTeamName (props: ShowTeamNameType) {
    console.log("ShowTeamName: " + props.name);
}

//let visa = ShowTeamName({name: "It incubator"});


type ShowTeamMembersType = {
    members: Array<string>
    //name: string
}

export function ShowTeamMembers(props: ShowTeamMembersType) {
    console.log("TeamMembers: " + props.members);
}

ShowTeamMembers({members: ["Dima", "Koly"]})


export function sum(a: number, b: number) {
    return a + b
}


type ShowTeamType = {
    name: string
    members: Array<string>
}

export function ShowTeam(props: ShowTeamType) {
    ShowTeamName({name: props.name});
    ShowTeamMembers({members: props.members});
}

ShowTeam({name: "Toly", members: ["Oly", "Yolden"]});


// console.log(state.names[0].name)
// console.log(StudentsType[0])
// export default students;
