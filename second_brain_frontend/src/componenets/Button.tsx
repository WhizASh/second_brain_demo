import { ReactElement } from "react"

interface ButtonProps{
    varients:"primary"|"secondary",
    text:string,
    startIcon?:ReactElement,
    onclick?:()=>void,
    loading?:boolean,
}

const varientClasses = {
    "primary":"bg-purple-600 text-white ",
    "secondary":"bg-purple-300 text-purple-400 "
}

const commanStyles = "rounded-md flex py-2 px-4 items-center"


export const Button = ({varients,text,loading,onclick,startIcon}:ButtonProps)=>{

    return <button onClick={onclick} className={varientClasses[varients]+commanStyles}>
        <div className="pr-2">
        {startIcon}
        </div>
        {loading?"Loading ...":text}
        </button>
}