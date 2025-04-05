import { useEffect, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"

import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface ShareBrainLinkProps{
    isShareOpen:boolean,
    onClose:()=> void
}

export const ShareBrainLink = ({isShareOpen,onClose}:ShareBrainLinkProps)=>{

    const [isLoading,setLoading] = useState(false)
    const [res,setRes] = useState("")
    
    useEffect(()=>{
        setLoading(true)
        axios.post(`${BACKEND_URL}api/v1/brain/share`,{
            share:true
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        }).then((response)=>{
            setRes(`${BACKEND_URL}api/v1/brain/${response.data.link}`)
            setLoading(false)
        }).catch((response)=>{
            setRes("Error "+response)
        })
    },[])

    return <div>
        {isShareOpen && <div>
        
            <div className="w-screen h-screen bg-gray-300 top-0 left-0 fixed opacity-70">

            </div>

            <div className="w-screen h-screen top-0 left-0 fixed flex justify-center items-center">
                <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="hover:cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div className="w-64 p-2">
                        <h1>Here is your link !! Anyone can paste this link to see your brain !!!</h1>
                        <Input value={isLoading?"Loading Link":res} isReadonly={true} />
                    </div>
                </div>
            </div>

        </div>
        }


    </div>
}