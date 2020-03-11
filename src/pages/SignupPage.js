import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

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
            <InnerText> You are signed up!</InnerText>
            <InnerText>
              <Link to={'/login'} tabIndex='-1'>
                Click here to login
              </Link>
            </InnerText>
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
`
