import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Route, Redirect, useHistory } from 'react-router-dom'

import { authUser } from '../reducers/userdata'


export const PrivateRoute = ({ children, ...rest }) => {

  let history = useHistory()

  const dispatch = useDispatch()
  // const { isAuthenticated } = useSelector((state) => state.userdata)
  const isAuthenticated = window.sessionStorage.getItem('isAuthenticated')
  console.log("PrivateRoute - isAuthenticated:", isAuthenticated)

  if (!isAuthenticated) {
    let accessToken = window.sessionStorage.getItem('accessToken')
    console.log("PrivateRoute (sessionStorage) - accessToken:", accessToken)

    dispatch(authUser(accessToken))
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (children) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }}
          />
        )
      }
    />
  );
}