import { ReactElement } from "react";

export function SidebarItems({text,icon}:{
        text:String,
        icon:ReactElement
}){
    return <div className="flex items-center px-8 py-4 hover:text-gray-950 cursor-pointer">
        <div className="pr-4">
            {icon} 
        </div>
        <div className="text-xl text-gray-00">
            {text}
        </div>
    </div>
}