import React from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";


type StateType = {
    collapsed: boolean
}

test("chek my reducer on true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    let newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expect
    expect(newState.collapsed).toBe(true);
} )

test("chek my reducer on false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    let newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expect
    expect(newState.collapsed).toBe(false);
} )

test("chek my reducer on ERROR", () => {
    //data
    const state: StateType = {
        collapsed: true
    }


    //expect
    expect(() => {
        reducer(state, {type: "Crazy"})
    }).toThrowError();
} )




