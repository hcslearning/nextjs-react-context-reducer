export function MyReducer(state, action){
    let newState = {...state}
    switch( action?.type ) {
        case "ADD":
            newState.total = state.total + (100 * action?.payload?.pid)
            newState?.cartItems?.push( action.payload.pid )
            break
        case "REMOVE":
            
            break
        default:
            throw "Error: tipo desconocido"
    }    
    return newState
}