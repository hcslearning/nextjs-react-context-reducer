import { useReducer } from "react"

export function MyReducer(state, action){
    console.log("STATE:")
    console.dir(state)
    console.log("ACTION:")
    console.dir(action)
    let newState = {
        ...state,
        countItems: state.countItems + 1
    }
    newState.cartItems.push( action.payload.pid )
    return newState
}

export function Productos(props) {
    const initState = {
        cartItems: [],
        countItems: 0
    }
    const [state, dispatch] = useReducer(MyReducer, initState)

    return (
        <>
        <h2>Productos</h2>
        <p>In cart: {state?.countItems}</p>
        <p>Carro</p>
        <ul>
            {state.cartItems.map( (ci, index) => <li key={index}>PID: {ci}</li> )}
        </ul>
        <ul>
            <li>
              Producto #1 <button onClick={ () => dispatch({type: 'add', payload: {pid:1}}) }>add</button>
            </li>
            <li>
              Producto #2 <button onClick={ () => dispatch({type: 'add', payload: {pid:2}}) }>add</button>
            </li>
            <li>
              Producto #3 <button onClick={ () => dispatch({type: 'add', payload: {pid:3}}) }>add</button>
            </li>
        </ul>
        </>
    )
}