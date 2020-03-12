import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MemberAddDog } from './MemberAddDog'
import { authUser } from 'reducers/userdata'



export const MemberArea = () => {
  // const [data, setData] = useState('')



  return (
    <div className="loggedin-area">
      <p>Add an ad</p>
      <MemberAddDog />
    </div>
  )
}
