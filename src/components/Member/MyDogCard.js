import React from 'react'
import styled from 'styled-components/macro'
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faBirthdayCake, faPaw, faPhone } from '@fortawesome/free-solid-svg-icons'


// Moment
import moment from 'moment'
// Global theme
import { mainTheme } from '../../lib/GlobalStyle'







export const MyDogCard = ({ item }) => {

  return (

    <CardContainer >
      <Wrapper>
        <Text><BoldText>Name:</BoldText> {item.name}</Text>
        <Text><BoldText>Breed:</BoldText> {item.breed.name} </Text>
        <Text><BoldText>Gender: </BoldText> {item.sex} </Text>
        <Text><BoldText>Age:</BoldText> {moment(item.birthdate).fromNow(true)} </Text>
        <Text> <BoldText>Price: </BoldText> {item.price} SEK</Text>
        <Text><BoldText>Location:</BoldText> {item.location}</Text>
      </Wrapper>
    </CardContainer >

  )
}


/* ------ STYLING ------ */

const CardContainer = styled.div`
  width:300px;
  background: ${mainTheme.whiteish};
  border-radius: 6px;
  color: ${mainTheme.blackish};
  margin: 10px;
  padding: 10px;
`

const Wrapper = styled.div`
  width: 100%;
  /* Mobile */
  @media (max-width: 375px) {
  
  }
`

const Text = styled.p`
  font-size: 12px;
  margin-bottom: 6px ;
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