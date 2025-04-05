import { useRef } from "react"
import {CrossIcon} from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
interface CreateContentModalprops {
    open:boolean,
    onClose:()=>void
}

export const CreateContentModal = ({open,onClose}:CreateContentModalprops) => {
    const typeRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const titleRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()

    async function add(){
        const type = typeRef.current?.value;
        const link = linkRef.current?.value;
        const title = titleRef.current?.value;

        if (type==""){
            alert("Please select a valid type !!")
            return
        }

        await axios.post(`${BACKEND_URL}api/v1/content`,{
            type:type,
            link:link,
            title:title
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        })

        navigate("/dashboard")
    }



    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-300 fixed opacity-70 top-0 left-0">

            </div>

            <div className="w-screen h-screen left-0 top-0 fixed flex items-center justify-center ">
                <div className="bg-white p-4 rounded-xl">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="hover:cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input refe={titleRef} placeholder="Title" />
                        <Input refe={linkRef} placeholder="Link" />
                        <DropdownMenu refe={typeRef} types={["video","tweet"]} />
                    </div>
                    <div className="py-2 flex justify-center">
                        <Button onclick={add} varients="secondary" text="Submit"  />
                    </div>
                </div>
            </div>
        </div>}
    </div>
}

