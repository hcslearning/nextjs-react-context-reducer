import { StoreContextProvider } from "./StoreContexto"

export function Layout(props){
    return (
        <StoreContextProvider>
            <div className="container">
                {props.children}
            </div>
        </StoreContextProvider>
    )
}