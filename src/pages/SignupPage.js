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
      <TopSection>
        <InnerText>In order to create an ad, you need to sign up here</InnerText>
      </TopSection>
      <SectionWrapper>
        {!isRegistered &&
          <GridWrapper>
            <SignupInfo>
              <Title>Signup information</Title>
              <Text>Signup information</Text>
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
  
  grid-template-columns: minmax(250px, 400px) minmax(250px, 400px);
  column-gap: 20px;
  row-gap: 20px;
  align-items: top;

  @media (min-width: 0px) and (max-width: 668px) {
    grid-template-columns: minmax(250px, 400px);
    grid-template-rows: auto auto;
  }
`

const SignupInfo = styled.div`
  width: 100%;
  
`
const TopSection = styled.section`
  color: ${mainTheme.whiteish};
  background-color: ${mainTheme.blackish};
  border-radius: 50px 50px 0px 0px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
  }
`

const SectionWrapper = styled.section`
  background-color: ${mainTheme.quinary};
  /* background: url("/assets/pink-pattern_a.jpg"); */
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  padding: 40px;
  border-radius: 0px 0px 50px 50px;
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
  align-self: center;
  & > * {
    font-size:50px;
  }
`

const Button = styled.button`
  margin-top: 10px;
  background: ${mainTheme.tertiary};
  border-radius: 20px;
  color: ${mainTheme.whiteish};
  padding: 8px;
  width:200px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border-style: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: ${mainTheme.quaternary};
    color: ${mainTheme.whiteish};
    transition: 0.1s;
  }
`
const Title = styled.h1`
  color: ${mainTheme.tertiary};
  margin: 5px 0px;
  font-size: 23px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`

const Text = styled.p`
  color: ${mainTheme.blackish};
  font-size: 15px;
  text-align: ${props => props.textalign};
  justify-self: ${props => props.justifyself};;
`