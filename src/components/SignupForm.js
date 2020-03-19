import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Style component
import styled from 'styled-components/macro'

// Material UI 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


// Register a new user (from reducer)
import { registerNewUser } from 'reducers/userdata'


// Global theme
import { mainTheme } from '../lib/GlobalStyle'




export const SignupForm = () => {
  const { message } = useSelector((state) => state.ui)

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
    <>
      <Form onSubmit={handleSignup}>
        <InputWrapper>
          <StyledTextField
            required
            variant="outlined"
            label="Name"
            onChange={(e) => { setName(e.target.value) }}
          />
          <StyledTextField
            required
            variant="outlined"
            label="E-mail"
            type="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <StyledTextField
            error={(password.length < 6 && password.length !== 0)}
            required
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="off"
            helperText={(password.length < 6 && password.length !== 0) ? "Must be at least 6 characters" : ""}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <StyledTextField
            error={(password !== confirmPwd) && confirmPwd !== ""}
            required
            variant="outlined"
            label="Confirm password"
            helperText={((password !== confirmPwd) && confirmPwd !== "") ? "Password does not match" : ""} //password validation
            type="password"
            autoComplete="off"
            onChange={(e) => { setConfirmPwd(e.target.value) }}
          />
          <StyledButton
            variant="contained"
            disableElevation
            type="submit"
          >
            Create account
         </StyledButton>

          <Messages>
            <ErrorMsg>{message.error} </ErrorMsg>
            <SuccessMsg>{message.success}</SuccessMsg>
          </Messages>

        </InputWrapper>

      </ Form>

    </>
  )
}


/* ------ STYLING ------ */

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    margin: 10px 0px;
  }
  label.Mui {
    color: ${mainTheme.blackish};
  }
  label.Mui-focused {
    color: ${mainTheme.tertiary};
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${mainTheme.grayish};
    }
    &:hover fieldset {
      border-color: ${mainTheme.tertiary};
    }
    &.Mui-focused fieldset {
      border-color: ${mainTheme.tertiary};
    }
  }
`

const StyledButton = styled(Button)`
  && {
    width: 100%;
    margin: 10px 0px;
    height: 50px;
    color:${mainTheme.whiteish};
    font-size: 19px;
    background-color: ${mainTheme.tertiary};
  }
  &&:hover{
    background-color: transparent;
    border: 1px solid ${mainTheme.tertiary};
    color:${mainTheme.tertiary};
  }
`

const Form = styled.form`
 
`

const InputWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* display: flex;
  flex-direction:column;
  justify-content: space-around;
  background: lightyellow; */
`

const Messages = styled.p`
  height: 25px;
  font-size: 19px;
  text-align:center;
`
const ErrorMsg = styled.span`
  color: red;
`

const SuccessMsg = styled.span`
  color: green;
`