const options = 'qwertyuiopasdfghjkl1234567890'

export const random = (n:number)=>{
    let hash = ''
    for (let i=0;i<n;i++){
        hash = hash + options[Math.floor(Math.random()*options.length)]
    }
    return hash
}
