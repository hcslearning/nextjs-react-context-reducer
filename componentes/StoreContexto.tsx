import { createContext, useReducer } from "react"
import { MyReducer } from "../lib/MyReducer"

export const initValues = {
    cartItems:[], 
    total: 0
}

export const initState = {
    state: initValues,
    dispatch: (p) => {}
}
export const StoreContext = createContext( initState )

export function StoreContextProvider(props) {
    const [state, dispatch] = useReducer(MyReducer, initValues)
    return (
        <StoreContext.Provider value={ {state, dispatch} }>
            {props.children}
        </StoreContext.Provider>
    )
}