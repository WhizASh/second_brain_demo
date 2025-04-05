import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar(){
    return <div className="h-screen bg-white w-72 left-0 top-0 border-2 border-gray-100">
        <div className=" text-3xl font-bold flex items-center pb-8 pt-2 ml-6">
            {<Logo />}
            <h1 className=" text-center">Second Brain</h1>
        </div>
        <div className="text-gray-600">
            <SidebarItems  icon={<YoutubeIcon />} text={"Youtube"}/>
            <SidebarItems   icon={<TwitterIcon />} text={"Twitter"}/>
        </div>
    </div>
}