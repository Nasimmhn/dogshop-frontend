import React from 'react'
import styled from 'styled-components/macro'

import { LoginForm } from 'components/LoginForm'






export const LoginPage = () => {

  return (
    <>
      <TopSection>

        <InnerText>Login</InnerText>

      </TopSection>


      <SectionWrapper>
        <LoginForm />
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