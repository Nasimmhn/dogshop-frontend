import React from 'react'
import styled from 'styled-components/macro'



const RaceWrapper = styled.div`
  width: 100%;
  background: rgba(255,255,255, 0.5);
  border-radius: 6px;
  color: #333;
  margin: 8px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  }
`
const InfoWrapper = styled.div`
`

const Text = styled.p`
  font-size: 12px;
  margin: 5px 0;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`
const FatText = styled.span`
  font-weight: bold;
  font-size: 12px;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`

const StyledImg = styled.img`
  width: 200px;
  @media (min-width: 668px) {
    width: 300px;
  }
`

export const DogRaceItem = ({ name, activity, group, size, imageUrl }) => {

  return (
    <RaceWrapper>
      <InfoWrapper>
        <Text><FatText>Name:</FatText> {name}</Text>
        <Text><FatText>Activity:</FatText> {activity}</Text>
        <Text><FatText>Group:</FatText> {group}</Text>
        <Text><FatText>Size:</FatText> {size}</Text>
      </InfoWrapper>
      <StyledImg src={imageUrl} />
    </RaceWrapper>
  )
}
