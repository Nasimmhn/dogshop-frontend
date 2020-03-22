import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

// Style component
import styled from 'styled-components/macro'

// Material UI 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// Reducer
import { loginUser } from 'reducers/userdata'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const { message } = useSelector((state) => state.ui)
  const { isAuthenticated } = useSelector((state) => state.userdata)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

  }, [dispatch, isAuthenticated])


  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser(email, password))
  }

  return (
    <>
      {isAuthenticated &&
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
      {message.error && <ErrorMsg> {message.error} </ErrorMsg>}
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

const ErrorMsg = styled.p`
  font-size: 22px;
  color: red;
  margin:5px 0;
  text-align:center;
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
    color: ${mainTheme.redish};
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${mainTheme.grayish};
    }
    &:hover fieldset {
      border-color: ${mainTheme.redish};
    }
    &.Mui-focused fieldset {
      border-color: ${mainTheme.redish};
    }
  }
`

const StyledButton = styled(Button)`
  && {
    width: 380px;
    margin: 10px 0px;
    height: 50px;
    color:${mainTheme.whiteish};
    font-size: 19px;
    background-color: ${mainTheme.redish};
  }
  &&:hover{
    background-color: transparent;
    border: 1px solid ${mainTheme.redish};
    color:${mainTheme.redish};
  }
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;
  }
`