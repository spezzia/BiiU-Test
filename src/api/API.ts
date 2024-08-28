import axios, { AxiosInstance } from "axios"


export class API {

    private axios: AxiosInstance

    public constructor(userToken?:string ){
        this.axios = axios.create({
            baseURL:'https://fakestoreapi.com/',
            timeout: 10000,
            headers:{
                'Authorization':`Bearer ${userToken}`
            }
        })
    }

    public async GET(path:string) {
        try {
            let response = await this.axios.get(path)
            return { status: response.status, data: response.data}
        } catch (error) {
            console.log(error)
            return { status: 500, data:{}}
        }
    }

    public async POST(path:string, data: string) {
        try {
            let response = await this.axios.post(path, data)
            return { status: response.status, data: JSON.parse(response.data)}
        } catch (error) {
            console.log(error)
            return { status: 500, data:{}}
        }
    }

}


