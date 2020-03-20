import React from 'react'
import { Redirect } from 'react-router'

import { useDispatch } from 'react-redux'

// Reducer
import { userdata } from '../reducers/userdata'
import { ui } from '../reducers/ui'

export const Logout = () => {
  const dispatch = useDispatch()
  dispatch(userdata.actions.clearUser())
  dispatch(ui.actions.resetUI())
  window.sessionStorage.clear()
  return (
    <Redirect to="/" />
  )
}