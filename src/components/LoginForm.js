import React, { useState } from 'react'
import { useHistory, useLocation, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

// Style component
import styled from 'styled-components/macro'

// Material UI 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// loginUser (from reducer)
import { loginUser } from 'reducers/userdata'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const LoginForm = () => {
  const { messages } = useSelector((state) => state.userdata)
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: "/" } }
  console.log("location.state:", location.state)

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser(email, password))
  }


  return (
    <>
      {messages.success &&
        <Redirect to={'/members'} />
      }

      <Form onSubmit={handleLogin}>
        <div>
          <StyledTextField
            required
            variant="outlined"
            label="E-mail"
            type="email"
            autoComplete="on"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <StyledTextField
            required
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="on"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <StyledButton
          variant="contained"
          disableElevation
          type="submit"
        >
          Login
        </StyledButton>
      </Form>
      {messages.error && <FailedText> {messages.error} </FailedText>}
    </>
  )
}


/* ------ STYLING ------ */


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FailedText = styled.p`
  font-size: 16px;
  color: red;
  margin:5px 0;
`
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
    background-color: ${mainTheme.secondary};
  }
  &&:hover{
    background-color: ${mainTheme.tertiary};
  }
`