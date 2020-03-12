import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AdsForm } from './AdsForm'
import { authUser } from 'reducers/userdata'



export const PrivateRoute = () => {
  // const [data, setData] = useState('')



  return (
    <div className="loggedin-area">
      <p>Add an ad</p>
      <AdsForm />
    </div>
  )
}
