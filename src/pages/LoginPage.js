import React from 'react'

// Styled components
import styled from 'styled-components/macro'

// Components
import { LoginForm } from 'components/LoginForm'




// Global color theme
import { mainTheme } from '../lib/GlobalStyle'


export const LoginPage = () => {

  return (
    <>
      <SectionWrapper>
        <FormContainer>
          <GridWrapper>
            <Image src="/assets/login-hero_d.png" />
            <LoginForm />
          </GridWrapper>
        </FormContainer>
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */


const SectionWrapper = styled.section`
 background-color: ${mainTheme.lightgray};
  /* background: url("/assets/pink-pattern_a.jpg"); */
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  /* border-radius: 0px 0px 50px 50px; */
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
  /* Tablet & Mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    flex-direction: column;
    align-items: center;
  }
`

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  width: 500px;
  height:600px;
  /* Mobile */
  @media (max-width: 375px) {
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
    box-shadow: unset;
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  min-width: 250px;
  overflow: hidden;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: flex-end;

`
