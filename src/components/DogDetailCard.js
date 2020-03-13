import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'
import moment from 'moment'

import { PATHS } from 'App'
// fetchDog function (from reducer)


export const DogDetailCard = ({ dog }) => {
  return (


    <Card>
      <Image src={PATHS.dog_races.concat(dog.images.url)} />
      <Content>
        <TitleBar>
          <FlexWrapper>
            <SubTitle><FontAwesomeIcon icon={faMapMarkedAlt} /> {dog.location}</SubTitle>
            <SubTitle><FontAwesomeIcon icon={faMoneyBillWave} /> {dog.price} SEK</SubTitle>
            <SubTitle><FontAwesomeIcon icon={faAddressCard} /> {dog.owner.name}</SubTitle>
          </FlexWrapper>
          <FlexWrapper>
            <Title>{dog.race.name} <FontAwesomeIcon icon={faPaw} /></Title>
          </FlexWrapper>
          <GridWrapper>
            <SubTitle align={"start"}><FontAwesomeIcon icon={faBirthdayCake} /> {moment(dog.birthdate).fromNow(true)}</SubTitle>
            <SubTitle align={"end"}><FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></SubTitle>
            <SubTitle align={"start"}><FontAwesomeIcon icon={faDog} /> {dog.race.group.join(', ')}</SubTitle>
            <SubTitle align={"end"}><FontAwesomeIcon icon={faRulerCombined} /> {dog.race.size.join(', ')}</SubTitle>
          </GridWrapper>
        </TitleBar>
        <FlexWrapper>
          <BottomTitle> {dog.description}</BottomTitle>
        </FlexWrapper>
        <FlexWrapper justify={"center"}>
          <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"Published: ".concat(moment(new Date(dog.addedAt)).fromNow())}</BottomTitle>
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
  width:700px;
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