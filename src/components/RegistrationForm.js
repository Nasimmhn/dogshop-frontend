import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// fetchDogs function (from reducer)
import { registerNewUser, userdata } from 'reducers/userdata'






export const RegistrationForm = () => {
  const dispatch = useDispatch()
  // const isRegistered = useSelector(state => state.userdata.isRegistered)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  const handleSignup = (event) => {
    handlePassword(password, confirmPwd)
    event.preventDefault()
    dispatch(registerNewUser(name, email, password))
  }

  const handlePassword = (password, confirmPwd) => {
    if (password !== confirmPwd) {
      console.log("Passwords do not match")
      alert("Passwords do not match")
    }
  }

  return (
    <div className='form-container'>
      <div className="upper-form-container">
        <h2>Sign up</h2>
      </div>

      <form onSubmit={handleSignup}>
        <div className="text-input">
          <TextField
            required
            className="outlined-basic"
            variant="outlined"
            label="Name"
            onChange={(e) => { setName(e.target.value) }}
          />
          <TextField
            required
            className="outlined-basic"
            variant="outlined"
            label="E-mail"
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            required
            className="outlined-basic"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="off"
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <TextField
            error={(password !== confirmPwd) && confirmPwd !== ""}
            required
            className="outlined-basic"
            variant="outlined"
            label="Confirm password"
            helperText={((password !== confirmPwd) && confirmPwd !== "") ? "Password does not match" : ""} //password validation
            type="password"
            autoComplete="off"
            onChange={(e) => { setConfirmPwd(e.target.value) }}
          />

        </div>
        <Button variant="contained" disableElevation type="submit">Create account</Button>
      </form>
    </div>
  )
}


/* ------ STYLING ------ */