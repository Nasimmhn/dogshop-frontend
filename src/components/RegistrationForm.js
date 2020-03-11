import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
// Material UI 
import { makeStyles } from '@material-ui/core/styles'
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
  const classes = useStyles() // Need this to make a custom styling on inputs

  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(registerNewUser(name, email, password))
  }


  return (
    <>
      <Form onSubmit={handleSignup}>
        <InputWrapper className={classes.root} >
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            label="Name"
            onChange={(e) => { setName(e.target.value) }}
          />
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            label="E-mail"
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            error={(password.length < 6 && password.length !== 0)}
            required
            className={classes.textField}
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
            className={classes.textField}
            variant="outlined"
            label="Confirm password"
            helperText={((password !== confirmPwd) && confirmPwd !== "") ? "Password does not match" : ""} //password validation
            type="password"
            autoComplete="off"
            onChange={(e) => { setConfirmPwd(e.target.value) }}
          />
        </InputWrapper>
        <Button
          className={classes.Button}
          variant="contained"
          disableElevation
          disabled={(password !== confirmPwd) || password.length < 6}
          type="submit"
        >
          Create account
        </Button>
      </ Form>
    </>
  )
}


/* ------ STYLING ------ */


//  input custom style 
const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    margin: '15px',
    width: '100%',
  },
  Button: {
    width: '100%',
    height: '50px',
  }
})

const Form = styled.form`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.div`
  /* height: 100%;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: red; */
`

