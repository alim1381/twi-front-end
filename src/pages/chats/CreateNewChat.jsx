import React, { useState } from 'react'
import CreateChatModal from '../../components/modal/CreateChatModal'

function CreateNewChat() {
  const [showModal , setShowModal] = useState(false)
  return (
    <div className=" w-full p-3 flex justify-between">
      <h2 className=" text-white font-bold">Create NewChat</h2>
      <button onClick={() => setShowModal(true)} className=" h-fit p-1 px-2 rounded-md font-bold text-gray-900 hover:bg-neutral-200 bg-white">+ new chat</button>
      <CreateChatModal isOpen={showModal} close={setShowModal} />
    </div>
  )
}

export default CreateNewChat