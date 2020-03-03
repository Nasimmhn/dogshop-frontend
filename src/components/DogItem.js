import React from 'react'
import styled from 'styled-components/macro'
import { InfoWrapper, Text, BoldText, StyledImg } from '../lib/MainSectionStyle'



const ItemWrapperInner = styled.div`
  width: 100%;
  background: rgba(255,255,255, 0.5);
  color: #333;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid black; 
`




export const DogItem = ({ age, sex, location }) => {

  return (
    <ItemWrapperInner>
      <InfoWrapper>
        <StyledImg src={imageUrl} />
        <Text><BoldText>Age:</BoldText> {age}</Text>
        <Text><BoldText>Sex:</BoldText> {sex}</Text>
        <Text><BoldText>Location:</BoldText> {location}</Text>
      </InfoWrapper>
      <InfoWrapper>
        <Text><BoldText>Name:</BoldText> {name}</Text>
        <Text><BoldText>Activity:</BoldText> {activity}</Text>
        <Text><BoldText>Group:</BoldText> {group}</Text>
        <Text><BoldText>Size:</BoldText> {size}</Text>
      </InfoWrapper>

    </ItemWrapperInner>
  )
}
