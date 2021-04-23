export function Carro(props){
    return (
        <div className="carro">
            <div className="carro-header">
                <h2>Carro de Compras</h2>
            </div>

            <div className="carro-body">
                Producto #1 x 2 <br />
                Producto #2 x 1 <br /> <br />

                SUBTOTAL: $90 <br />
                ENVIO: $10 <br />
                TOTAL: $100 <br />
            </div>
        </div>
    )
}