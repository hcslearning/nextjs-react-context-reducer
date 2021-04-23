import { Carro } from "../componentes/Carro"
import { Layout } from "../componentes/Layout"
import { Productos } from "../componentes/Producto"

export default function Home() {  
  return (
    <Layout>
    <div className="container">
      <h1 className="text-center">Ejemplo - Contexto + Reducer</h1>
      <div className="row mt-5 border border-5">
        <div className="col-6 bg-dark text-light p-5">
          <Productos />
        </div>

        <div className="col-6 bg-light p-5">
          <Carro />
        </div>
      </div>
    </div>
    </Layout>
  )
}
