import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
// Material UI 
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// login (from reducer)
import { loginUser } from 'reducers/userdata'



export const LoginForm = () => {
  const dispatch = useDispatch()
  // const isloginFailed = useSelector(state => state.userdata.isLoginFailed)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles() // Need this to make a custom styling on inputs

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser(email, password))
  }


  return (
    <>
      <Form onSubmit={handleLogin}>
        <InputWrapper className={classes.root} >
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            label="E-mail"
            type="email"
            autoComplete="on"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <TextField
            required
            className={classes.textField}
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="on"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </InputWrapper>
        <Button
          className={classes.Button}
          variant="contained"
          disableElevation
          type="submit"
        >
          Login
        </Button>
      </Form>
      {/* {isloginFailed && <FailedText>Incorrect user and/or password.</FailedText>} */}
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
  height: 400px;
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


const FailedText = styled.p`
  font-size: 16px;
  color: red;
  margin:5px 0;
`