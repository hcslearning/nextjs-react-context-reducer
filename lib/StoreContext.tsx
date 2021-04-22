import { createContext, useReducer } from "react";
import { StoreModel } from "../tipo/StoreModel";
import { StoreReducer } from "./StoreReducer";

export const StoreContext = createContext( {state:null, dispatch: null} )

export function StoreContextProvider(props) {
    const initialState:StoreModel = {
        cartItems:      [],
        totalSinEnvio:  0,
        montoEnvio:     0,
        totalConEnvio:  0,
        initialized: false,
        add:    (p) => { console.log("TODO: add()") },
        remove: (p) => { console.log("TODO: remove()") }
    }
    
    const [state, dispatch] = useReducer(StoreReducer, initialState)

    const add       = (payload) => dispatch({type: 'ADD', payload})
    const remove    = (payload) => dispatch({type: 'REMOVE', payload})
    
    if( !state.initialized ) {
        const payload = {add, remove}
        dispatch({type: 'INIT', payload})
    }
    
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {props.children}
        </StoreContext.Provider>
    )
}