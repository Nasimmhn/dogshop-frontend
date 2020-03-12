import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// Component
import { MemberArea } from '../components/MemberArea'

// From reducer
import { authUser } from '../reducers/userdata'






export const MemberPage = () => {

  const { _id, name, accessToken } = useSelector((state) => state.userdata.user)
  console.log("name:", name, "id:", _id, "accessToken:", accessToken)

  const dispatch = useDispatch()
  dispatch(authUser(accessToken))
  // const isAuthenticated = useSelector((state) => state.userdata.isAuthenticated)
  const isLoggedin = useSelector((state) => state.userdata.isLoggedin)


  return (
    <>
      {!isLoggedin ?
        < MemberArea /> :
        <Redirect to="/login" />}
    </>
  )
}


/* ------ STYLING ------ */



