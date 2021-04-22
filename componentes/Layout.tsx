import { StoreContextProvider } from "../lib/StoreContext";

export function Layout(props) {
    return (
        <StoreContextProvider>
            {props.children}
        </StoreContextProvider>
    )
}