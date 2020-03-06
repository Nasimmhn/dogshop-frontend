import React from 'react'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faRulerCombined, faDog, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'

export const DogCard = ({ age, price, sex, location, race, imageUrl, addedAt, group, size }) => {

  // const displayAge = (weeks) => {
  //   if (weeks < 20) { }
  //   return age
  // }

  console.log("addedAt", addedAt)
  return (

    <Card>
      <Image src={imageUrl} />
      <Content>
        <TitleBar>
          <FlexWrapper>
            <SubTitle><FontAwesomeIcon icon={faMapMarkedAlt} /> {location}</SubTitle>
            <SubTitle><FontAwesomeIcon icon={faMoneyBillWave} /> {price} SEK</SubTitle>
          </FlexWrapper>
          <FlexWrapper>
            <Title>{race.name}</Title>
          </FlexWrapper>
          <GridWrapper>
            <SubTitle align={"start"}><FontAwesomeIcon icon={faBirthdayCake} /> {age}</SubTitle>
            <SubTitle align={"end"}><FontAwesomeIcon icon={sex === "Female" ? faVenus : faMars} /> {sex}</SubTitle>
            <SubTitle align={"start"}><FontAwesomeIcon icon={faDog} /> {group}</SubTitle>
            <SubTitle align={"end"}><FontAwesomeIcon icon={faRulerCombined} /> {size}</SubTitle>
          </GridWrapper>
        </TitleBar>
        <FlexWrapper justify={"center"}>
          <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"Published: ".concat(moment(new Date(addedAt)).format("Do MMM YYYY"))}</BottomTitle>
        </FlexWrapper>
      </Content>
    </Card >

  )
}


/* ------ STYLING ------ */

const Card = styled.div`
  background: #fff;
  padding: 10px 10px 0px 10px;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(0,0,0,0.8);
  -moz-box-shadow: 0px 0px 17px -4px rgba(0,0,0,0.8);
  box-shadow: 0px 0px 17px -4px rgba(0,0,0,0.8);
  border-radius: 15px;
  width:300px;
  margin: 15px 15px 0px 15px;
  display: flex;
  flex-direction: column;
`

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify ? props.justify : "space-between"};
`
const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: auto;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 17px 0px;
  font-size: 23px;
`
const SubTitle = styled.p`
  margin: 3px 0px;
  color: #6b6b6b;
  justify-self: ${props => props.align};
`
const TitleBar = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`
const Image = styled.img`
  align-self: center;
  justify-self: center;
  width: 100%;
  -webkit-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  -moz-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  border-radius: 20px;
`
const Content = styled.div`
  padding: 10px 20px 5px 20px;
`
const BottomTitle = styled.div`
  padding: 10px;
  color: #6b6b6b;
`