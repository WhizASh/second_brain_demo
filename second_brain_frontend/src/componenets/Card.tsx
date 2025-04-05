import axios from "axios"
import { ShareIcon } from "../icons/ShareIcon"
import { TrashIcon } from "../icons/TrashIcon"
import { BACKEND_URL } from "../config"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { TwitterIcon } from "../icons/TwitterIcon"

interface CardProps{
    title:string,
    link:string,
    type:"tweet" | "video"
    id:string
}

export const Card = ({id,title,link,type}:CardProps)=>{

    async function del(){
        try{
            await axios.delete(`${BACKEND_URL}api/v1/content`,{
                headers:{
                    token:localStorage.getItem("token")
                },data:{
                    contentId:id
                }
            })

            alert("Deleted successfully !! ")
        }
        catch(e){
            alert("no delete "+e)
        }
    }


    return <div className="bg-white shadow-sm p-5  rounded-lg m-6 w-80 border border-gray-300 min-h-40 h-96 overflow-y-auto hover:bg-gray-50">
         
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="text-gray-600">
                    {type == 'video' ? <YoutubeIcon/> : <TwitterIcon />}
                </div>
                <h3 className=" pl-4 text-lg font-medium">{title}</h3>
            </div>
            <div className="flex items-center">
                <div className="pr-4 text-gray-400">
                    <a href={link} target="_blank">
                        <ShareIcon size={4}/>
                    </a>
                </div>
                <div className="pr-4 text-gray-400 hover:cursor-pointer" onClick={del}>
                    <TrashIcon />
                </div>
            </div>
        </div>

        <div className="py-6">
            {/* <h1 className="text-2xl font-semibold">Main Content</h1> */}

            {type=="video" && <iframe className="rounded-lg w-full" src={link.replace('watch?v=','embed/')} title="YouTube video player"   referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            
            {type=="tweet" && <blockquote className="twitter-tweet">
                <a href={link.replace('x.com','twitter.com')}></a> 
            </blockquote>}
            
        </div>
    </div>
}