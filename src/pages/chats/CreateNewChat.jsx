import React, { useState } from 'react'
import CreateChatModal from '../../components/modal/CreateChatModal'

function CreateNewChat() {
  const [showModal , setShowModal] = useState(true)
  return (
    <div className=" w-full">

      <CreateChatModal isOpen={showModal} close={setShowModal} />
    </div>
  )
}

export default CreateNewChat