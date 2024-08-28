import { API } from "../API"


export async function GetProducts<T>(limit:number = 20):Promise<T | undefined | string> {
    try {
        let api = new API()
        let response = await api.GET(`/products?limit=${limit}`)
        if(response.status === 200){
            return response.data
        }else{
            return 'Error al obtener la infromacion de los productos'
        }
    } catch (error) {
        throw new Error('Error al obtener la infromacion de los productos')
    }
}

export async function GetProductsByID<T>(id:number):Promise<T | undefined | string> {
    try {
        let api = new API()
        let response = await api.GET(`/products/${id}`)
        if(response.status === 200){
            return response.data
        }else{
            return 'Error al obtener la infromacion del producto'
        }
    } catch (error) {
        throw new Error('Error al obtener la infromacion del producto')
    }
}

