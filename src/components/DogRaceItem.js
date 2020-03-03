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
  /* justify-content: space-between; */
  /* @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  } */
`



export const DogRaceItem = ({ name, activity, group, size, imageUrl }) => {

  return (
    <ItemWrapperInner>
      <InfoWrapper>
        <StyledImg src={imageUrl} />
        <Text><BoldText>Name:</BoldText> {name}</Text>
        <Text><BoldText>Activity:</BoldText> {activity}</Text>
        <Text><BoldText>Group:</BoldText> {group}</Text>
        <Text><BoldText>Size:</BoldText> {size}</Text>
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
