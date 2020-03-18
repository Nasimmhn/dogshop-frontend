import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Style component
import styled from 'styled-components/macro'

// Reducer
import { getUser } from '../../reducers/userdata'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'


export const Profile = () => {
  const name = window.sessionStorage.getItem('name')
  const email = window.sessionStorage.getItem('email')

  return (
    <FlexWrapper justifyContent={"center"}>
      <ProfileInfo>
        <Title>Personal information</Title>
        <GridWrapper>
          <SubTitle> Name:</SubTitle>  {name}
          <SubTitle> Email:</SubTitle>  {email}
        </GridWrapper>
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
  align-self: flex-start;
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