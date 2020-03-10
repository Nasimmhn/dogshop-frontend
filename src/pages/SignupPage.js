import React from 'react'
import styled from 'styled-components/macro'

import { RegistrationForm } from 'components/RegistrationForm'







export const SignupPage = () => {
  return (
    <>
      <TopSection>
        <InnerText>Sign-Up</InnerText>
      </TopSection>

      <SectionWrapper>
        <RegistrationForm />
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
  background-color: beige;
  
`

const InnerText = styled.p`
font-size: 22px;
width:100%;
text-align: center;
`
