export const Input = ({value,placeholder,refe,isReadonly}:{value?:string,refe?:any,placeholder?:string,isReadonly?:boolean})=>{
    return <div>
        <input type="text" className="px-4 py-2 m-1 rounded-lg border-purple-300 border-2" value={value} readOnly={isReadonly} placeholder={placeholder} ref={refe} />
    </div>
}