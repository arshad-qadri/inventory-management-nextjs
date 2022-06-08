import axios from "axios"
import { baseUrl } from "../../variable"
import { GET_PRODUCT } from "./type"

export const getProduct = ()=>{
    return dispatch =>{
        axios.get(`${baseUrl}/products`).then((res)=>{
            console.log("res",res);
            dispatch({type:GET_PRODUCT, payload:res})
        }).catch((err)=>{
            console.log(err);
        })

    }
} 