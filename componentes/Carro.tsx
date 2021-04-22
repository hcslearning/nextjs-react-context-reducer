import { useContext } from "react"
import { StoreContext } from "../lib/StoreContext"

export function Carro(props){
    const contexto = useContext(StoreContext)
    return (
        <div>
            <h2>Carro</h2>

            ITEM COUNT: {contexto.state.cartItems.length} <br /><br />

            NETO: <br />
            IVA: <br />
            TOTAL: <br />

        </div>
    )
}