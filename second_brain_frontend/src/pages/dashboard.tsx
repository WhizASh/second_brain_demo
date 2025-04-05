import { useState } from 'react'
import { Button } from '../componenets/Button'
import { Card } from '../componenets/Card'
import { CreateContentModal } from '../componenets/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../componenets/Sidebar'
import { useContent } from '../hooks/useContent'
import { ShareBrainLink } from '../componenets/ShareBrainLink'


export function Dashbaord() {

    const [content,isLoading,isError,Error] = useContent()
    const [closeModal,setCloseModal] = useState(false)
    const [isShareOpen,setShareOpen] = useState(false)

    return (
    <> 

    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='p-10 w-screen min-h-screen bg-gray-200'>
          
          <div className='flex justify-between items-center pb-8'>
            <div>
              <h1 className='text-3xl ml-10 font-semibold'>All Notes</h1>
            </div>
            <div className='flex gap-4'>
                <Button onclick={()=>{setShareOpen(true)}} text='Share Brain' varients='secondary' startIcon={<ShareIcon size={6}/>}/>

                <Button onclick={()=>{setCloseModal(true)}} text='Add Content' varients='primary' startIcon={<PlusIcon />}/>
            </div>
          </div>

          <CreateContentModal open={closeModal} onClose={()=>{
            setCloseModal(false)
          }}/>

          <ShareBrainLink isShareOpen={isShareOpen}  onClose={()=>{
            setShareOpen(false)
          }} />
          {isError && <div>
            <h1>{Error}</h1>
            </div>}

          {!isError && <div className='flex flex-wrap'>
            
            {!isLoading &&
            //@ts-ignore
             content.map(({_id,title,type,link})=><Card id={_id} title={title} type={type} link={link} />)}
             
            {isLoading && <div><h1 className='text-center'>Content is loading</h1></div>}
          </div>}
      </div>
    </div>
    </>
  )
}


