import React from 'react'
import styled from 'styled-components/macro'


export const DogRaceItem = ({ name, activity, group, size, imageUrl }) => {

  return (
    <InfoWrapper>
      <StyledImg src={imageUrl} />
      <Text><BoldText>Name:</BoldText> {name}</Text>
      <Text><BoldText>Activity:</BoldText> {activity}</Text>
      <Text><BoldText>Group:</BoldText> {group}</Text>
      <Text><BoldText>Size:</BoldText> {size}</Text>
    </InfoWrapper>
  )
}


/* ------ STYLING ------ */
const InfoWrapper = styled.div`
 
`
const Text = styled.p`
  font-size: 12px;
  margin: 5px 0;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`
const BoldText = styled.span`
  font-weight: bold;
  font-size: 12px;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`
const StyledImg = styled.img`
  width: 250px;
  @media (min-width: 668px) {
    width: 100px;
    height: 100px;
  }
`