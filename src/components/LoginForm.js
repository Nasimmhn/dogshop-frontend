import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components/macro'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// login (from reducer)
import { loginUser } from 'reducers/userdata'



export const LoginForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser(email, password))
  }


  return (
    <div className='form-container'>
      <div className="upper-form-container">
        <h2>Login</h2>
      </div>

      <form onSubmit={handleLogin}>
        <div className="text-input">
          <TextField
            required
            className="outlined-basic"
            variant="outlined"
            label="E-mail"
            type="email"
            autoComplete="on"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            required
            className="outlined-basic"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="on"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <Button
          variant="contained"
          disableElevation
          type="submit"
        >
          Create account
        </Button>
      </form>
    </div>
  )
}


/* ------ STYLING ------ */