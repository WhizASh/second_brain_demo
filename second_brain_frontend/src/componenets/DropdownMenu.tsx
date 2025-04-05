
interface DropdownMenuProps{
    refe?:any,
    types:Array<string>,
}

export const DropdownMenu = ({refe,types}:DropdownMenuProps)=>{
    return <select ref={refe} className="px-4 py-2 m-1 w-full rounded-lg border-purple-300 border-2">
        <option value="">Select an option</option>
        {types.map((ele)=><option value={ele} >{ele}</option>)}
    </select>
}