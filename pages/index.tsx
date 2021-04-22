import { useContext, useEffect } from "react";
import { Carro } from "../componentes/Carro";
import { Layout } from "../componentes/Layout";
import { StoreContext } from "../lib/StoreContext";
import { StoreModel } from "../tipo/StoreModel";

export default function Home() {
  const contexto = useContext(StoreContext)

  useEffect(
    ()=>{
      console.dir( contexto )
    } 
    ,[contexto]
  )

  return (
    <Layout>
    <div className="container">
      <h1 className="text-center">Ejemplo - Contexto + Reducer</h1>
      <div className="row mt-5 border border-5">
        <div className="col-6 bg-dark text-light p-5">
          <ul>
            <li>
              Producto #1 <button onClick={() => { contexto.state.add({cantidad:1, pid: 1}) }}>add</button>
            </li>
            <li>
              Producto #2 <button onClick={() => { contexto.state.add({cantidad:1, pid: 2}) }}>add</button>
            </li>
            <li>
              Producto #3 <button onClick={() => { contexto.state.add({cantidad:1, pid: 3}) }}>add</button>
            </li>
          </ul>
        </div>

        <div className="col-6 bg-light p-5">
          <Carro />
        </div>
      </div>
    </div>
    </Layout>
  )
}
