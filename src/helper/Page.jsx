import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Page() {
    const navigate = useNavigate()
    const [id , setId] = useState("")
    const [token , setToken] = useState("")
  return (
    <div>
        <input type="text" value={id} placeholder='id' onChange={(e) => setId(e.target.value)}  />
        <input type="text" placeholder='token' value={token} onChange={(e) => setToken(e.target.value)}  />
        <button onClick={() => navigate(`/${id}?token=${token}`)}>Go to chat Page</button>
    </div>
  )
}

export default Page