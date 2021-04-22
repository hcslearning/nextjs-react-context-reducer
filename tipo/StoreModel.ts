export interface CartItem {
    pid:number 
    cantidad:number 
}
export type PayloadAdd = {
    pid:number
    cantidad:number 
}
export type PayloadRemove = {
    pid:number
}
export interface StoreModel {
    cartItems: CartItem[]
    totalSinEnvio:number
    montoEnvio:number
    totalConEnvio:number 
    initialized: boolean
    add: (p:PayloadAdd) => void 
    remove: (p:PayloadRemove) => void 
}