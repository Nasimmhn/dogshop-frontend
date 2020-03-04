import React from 'react'
import { InfoWrapper, Text, BoldText, StyledImg } from '../lib/MainSectionStyle'
import { InfoWrapper, Text, BoldText, StyledImg } from '../lib/MainSectionStyle'







export const DogItem = ({ age, price, sex, location, race, imageUrl }) => {

  return (

    <InfoWrapper>
      <StyledImg src={imageUrl} />
      <Text><BoldText>Race:</BoldText> {race.name}</Text>
      <Text><BoldText>Age:</BoldText> {age}</Text>
      <Text><BoldText>Price:</BoldText> {price}</Text>
      <Text><BoldText>Sex:</BoldText> {sex}</Text>
      <Text><BoldText>Location:</BoldText> {location}</Text>
    </InfoWrapper>

  )
}
