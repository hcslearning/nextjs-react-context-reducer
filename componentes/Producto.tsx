import { useContext, useReducer } from "react"
import { StoreContext } from "./StoreContexto"

export function Productos(props) {
    const contexto = useContext( StoreContext )
    return (
        <>
        <h2>Productos</h2>
        <ul>
            <li>
              Producto #1 <button onClick={ () => contexto.dispatch({type: 'ADD', payload: {pid:1}}) }>add</button>
            </li>
            <li>
              Producto #2 <button onClick={ () => contexto.dispatch({type: 'ADD', payload: {pid:2}}) }>add</button>
            </li>
            <li>
              Producto #3 <button onClick={ () => contexto.dispatch({type: 'ADD', payload: {pid:3}}) }>add</button>
            </li>
        </ul>
        </>
    )
}