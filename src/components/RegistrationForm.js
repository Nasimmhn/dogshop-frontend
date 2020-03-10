import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// registration (from reducer)
import { registerNewUser } from 'reducers/userdata'






export const RegistrationForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(registerNewUser(name, email, password))
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
            error={(password.length < 6 && password.length !== 0)}
            required
            className="outlined-basic"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="off"
            helperText={(password.length < 6 && password.length !== 0) ? "Must be at least 6 characters" : ""}
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
        <Button
          variant="contained"
          disableElevation
          disabled={(password !== confirmPwd) || password.length < 6}
          type="submit"
        >
          Create account
        </Button>
      </form>
    </div>
  )
}


/* ------ STYLING ------ */