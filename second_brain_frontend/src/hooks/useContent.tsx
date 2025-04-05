import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent(){
    const [content,setContent] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [Error,setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        axios.get(`${BACKEND_URL}api/v1/content`,{
            headers:{
                token:localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setContent(response.data.content)
            console.log(response)
            setLoading(false)
        }).catch((response)=>{
            setError(response.response.data.msg)
            setIsError(true)
            setLoading(false)
        })
        
    },[])

    return [content,isLoading,isError,Error]
}