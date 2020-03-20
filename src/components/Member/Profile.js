import React from 'react'

// Style component
import styled from 'styled-components/macro'

// Global color theme
import { mainTheme } from '../../lib/GlobalStyle'



export const Profile = () => {
  const name = window.sessionStorage.getItem('name')
  const email = window.sessionStorage.getItem('email')

  return (
    <FlexWrapper justifyContent={"flex-start"}>
      <ProfileInfo>
        <Wrapper>
          <Image />
        </Wrapper>

        <GridWrapper>
          <SubTitle> Name:</SubTitle>  {name}
          <SubTitle> Email:</SubTitle>  {email}
        </GridWrapper>
        <ButtonWrapper>
          <Button> Profile </Button>
        </ButtonWrapper>
      </ProfileInfo>
    </FlexWrapper>
  )
}



const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const ProfileInfo = styled.div`
  margin-top: 20px;
  padding: 40px;
  height: auto;
  min-height:350px;
  align-self: flex-start;
  background-color:${mainTheme.whiteish};
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

`

const SubTitle = styled.div`
  margin: 10px;
  font-weight: bold;
  text-align: right;

`

const Title = styled.h1`

`


const ButtonWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
 
`



const Button = styled.button`
  background: transparent;
  border-radius: 20px;
  color: ${mainTheme.blackish};
  padding: 10px;
  width:100px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border:  1px solid ${mainTheme.redish}; 
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${mainTheme.redish};
    border: 1px solid ${mainTheme.whiteish};
    color: ${mainTheme.whiteish};
    transition: 0.1s;
    
  } 

`


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;

`


const Image = styled.div`
   background-image: url(${props => props.filepath ? props.filepath : "/assets/profile-avatar.png"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 1px solid ${mainTheme.lightbeige};

`



