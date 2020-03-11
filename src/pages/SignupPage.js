import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
//font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// Material UI 
import Button from '@material-ui/core/Button'

import { RegistrationForm } from 'components/RegistrationForm'
import { useSelector } from 'react-redux'






export const SignupPage = () => {
  const isRegistered = useSelector((state) => state.userdata.isRegistered)
  return (
    <>
      <TopSection>
        <InnerText>Sign-Up</InnerText>
      </TopSection>
      <SectionWrapper>
        {!isRegistered &&
          <RegistrationForm />
        }
        {isRegistered &&
          <ConfirmDiv>
            <IconDiv>
              <FontAwesomeIcon icon={faCheckCircle} />
            </IconDiv>
            <InnerText> You are now signed up!</InnerText>
            <Button variant="contained" href="#contained-buttons">
              <Link to={'/login'} tabIndex='-1'>
                Click here to login
              </Link>
            </Button>
          </ConfirmDiv>
        }
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */

const TopSection = styled.section`
  width: 100%;
  height: 200px;
  background: #a6b1e1;
`

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
`

const InnerText = styled.p`
  font-size: 22px;
  width:100%;
  text-align: center;
`

const ConfirmDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`
const IconDiv = styled.div`
  align-self: center;
  & > * {
    font-size:50px;
  }
`