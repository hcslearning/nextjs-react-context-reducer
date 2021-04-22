import { StoreModel } from "../tipo/StoreModel"

export function StoreReducer(state, action){
    let newState:StoreModel = {
        ...state
    }
    console.log("action.type = "+action.type)
    switch( action.type ) {
        case "INIT":            
            const add = action.payload.add 
            const remove = action.payload.remove
            console.log("INIT:")
            newState = {
                ...newState,
                add,
                remove,
                montoEnvio: 100,
                initialized: true
            }
            console.log("oldState:")
            console.dir(state)
            console.log("newState:")
            console.dir(newState)
            console.log(state === newState )
            return newState
            break
        case "ADD":
            let cant:number = newState?.cartItems[action.payload.pid]?.cantidad ?? 0
            newState.cartItems[action.payload.pid] = {pid:action.payload.pid, cantidad: ++cant}
            console.log("ADD:")
            console.dir( newState )
            return newState
            break
        case "REMOVE":            
            delete newState.cartItems[action.payload.pid] 
            console.log("REMOVE:")
            console.dir( newState )
            return newState
            break
        default:
            throw "Tipo desconocido"
    }

}