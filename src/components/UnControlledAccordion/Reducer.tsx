type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export let TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export let reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type ) {
        case TOGGLE_CONSTANT:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error ("Bad action type")
    }
    return state

}