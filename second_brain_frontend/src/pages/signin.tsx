import axios from "axios"
import { Button } from "../componenets/Button"
import { Input } from "../componenets/Input"
import { useRef } from "react"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"



export function Signin(){

    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}api/v1/signin`,{
                username:username,
                password:password
        })

        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
        
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center p-6">
        <div className="">
            <Input refe={usernameRef} placeholder="Username"/>
            <Input refe={passwordRef} placeholder="Password"/>

            <div className="flex p-6 justify-center">
                <Button onclick={signin} varients="secondary" text="Signin" />
            </div>
        </div>

    </div>
}