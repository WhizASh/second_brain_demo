import axios from "axios"
import { Button } from "../componenets/Button"
import { Input } from "../componenets/Input"
import { useRef } from "react"
import { BACKEND_URL } from "../config"
import { data } from "react-router-dom"


export function Signup(){

    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()

    function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        axios.post(`${BACKEND_URL}api/v1/signup`,{
                username:username,
                password:password
        })

        alert("You are signed up !!!!!!!")
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center p-6">
        <div className="">
            <Input refe={usernameRef} placeholder="Username"/>
            <Input refe={passwordRef} placeholder="Password"/>

            <div className="flex p-6 justify-center">
                <Button onclick={signup} varients="secondary" text="Signup" />
            </div>
        </div>

    </div>
}