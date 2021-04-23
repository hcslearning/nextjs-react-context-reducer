import { useContext } from "react"
import { StoreContext } from "./StoreContexto"

export function Carro(props) {
    const contexto = useContext( StoreContext )
    return (
        <div className="carro">
            <div className="carro-header">
                <h2>Carro de Compras</h2>
            </div>

            <div className="carro-body">
                {contexto?.state?.cartItems?.map( (ci, index) => <p key={index}>{ci}</p>)}
                <br /><br />

                
                TOTAL: ${contexto.state.total} <br />
            </div>
        </div>
    )
}