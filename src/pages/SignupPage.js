import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
//font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// Material UI 

import { SignupForm } from 'components/SignupForm'
import { useSelector } from 'react-redux'


// Global color theme
import { mainTheme } from '../lib/GlobalStyle'




export const SignupPage = () => {
  const isRegistered = useSelector((state) => state.userdata.isRegistered)
  return (
    <>
      <SectionWrapper>
        {!isRegistered &&
          <GridWrapper>
            <SignupInfo>
              <Title>Signup information</Title>
              <InnerText>In order to publish an ad, you have to sign up!</InnerText>
              <SubTitle> <FontAwesomeIcon icon={faCheckCircle} /> Free </SubTitle >
              <SubTitle > <FontAwesomeIcon icon={faCheckCircle} /> Easy</SubTitle >
              <SubTitle > <FontAwesomeIcon icon={faCheckCircle} /> Safe</SubTitle >
            </SignupInfo>
            <SignupForm />
          </GridWrapper>
        }
        {isRegistered &&
          <ConfirmDiv>
            <IconDiv>
              <FontAwesomeIcon icon={faCheckCircle} />
            </IconDiv>
            <InnerText> You are now signed up!</InnerText>
            <Link to={'/login'} tabIndex='-1'>
              <Button variant="contained" href="#contained-buttons"> Click here to login </Button>
            </Link>
          </ConfirmDiv>
        }
      </SectionWrapper>
    </>
  )
}

/* ------ STYLING ------ */
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 550px) minmax(250px, 400px);
  column-gap: 50px;
  row-gap: 30px;
  align-items: top;
  @media (min-width: 0px) and (max-width: 668px) {
    grid-template-columns: minmax(250px, 400px);
    grid-template-rows: auto auto;
  }
`

const SignupInfo = styled.div`
  width: 100%;
  
`

const SectionWrapper = styled.section`
   background-color: ${mainTheme.lightgray};
  padding: 40px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  /* Mobile */
  @media (max-width: 375px) {
    padding: 10px;
  }
`
const InnerText = styled.p`
  font-size: 22px;
`

const ConfirmDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`
const IconDiv = styled.div`
 color: ${mainTheme.tertiary};
  align-self: center;
  & > * {
    font-size:60px;
  }
`

const Button = styled.button`
  background: ${mainTheme.tertiary};
  border-radius: 20px;
  color: ${mainTheme.whiteish};
  padding: 10px;
  width:250px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border:  1px solid transparent; 
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid ${ mainTheme.tertiary};
    color: ${ mainTheme.tertiary};
    transition: 0.1s;
    
  }
`
const Title = styled.h2`
  color:${ mainTheme.redish};
  margin: 5px 0px;
  font-size: 23px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`

const SubTitle = styled.h4`
  color:${ mainTheme.redish};
  padding:10px;
  margin: 5px 0px;
  font-size: 19px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`
