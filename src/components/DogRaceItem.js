import React from 'react'
import styled from 'styled-components/macro'
import { InfoWrapper, Text, BoldText, StyledImg } from '../lib/MainSectionStyle'





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
