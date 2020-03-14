import React from 'react'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'

// Path to 
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const DogCard = ({ dog }) => {

  console.log(PATHS.dogs.concat(dog.images.url))
  return (
    <Card>
      <Image filepath={PATHS.dogs.concat(dog.images.url)} />
      <Content>
        <TitleBar>
          <FlexWrapper flexdirection={"column"} justify={"space-evenly"}>
            <Title>{dog.name} <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></Title>
            <SubTitle>{dog.race.name} <FontAwesomeIcon icon={faPaw} /></SubTitle>
          </FlexWrapper>
        </TitleBar>
      </Content>
    </Card >
  )
}


//   {/* <FlexWrapper>
//     <SubTitle><FontAwesomeIcon icon={faMapMarkedAlt} /> {dog.location}</SubTitle>
//     <SubTitle><FontAwesomeIcon icon={faMoneyBillWave} /> {dog.price} SEK</SubTitle>
//   </FlexWrapper> */}
//   <FlexWrapper flexdirection={"column"} justify={"space-evenly"}>
//     <Title>{dog.name} <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></Title>
//     <SubTitle>{dog.race.name} <FontAwesomeIcon icon={faPaw} /></SubTitle>
//   </FlexWrapper>
//   {/* <GridWrapper>
//     <SubTitle align={"start"}><FontAwesomeIcon icon={faBirthdayCake} /> {moment(dog.birthdate).fromNow(true)}</SubTitle>
//     <SubTitle align={"end"}><FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></SubTitle>
//   </GridWrapper> */}
// </TitleBar>
// {/* <FlexWrapper justify={"center"}>
//   <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"Published: ".concat(moment(new Date(dog.addedAt)).fromNow())}</BottomTitle>
// </FlexWrapper> */}

/* ------ STYLING ------ */

const Card = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  height: 300px;
`

const FlexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexdirection ? props.flexdirection : "row"};
  justify-content: ${props => props.justify ? props.justify : "space-between"};
`
const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: auto;
`

const Title = styled.h1`
  color: ${mainTheme.tertiary};
  text-align: center;
  margin: 0px 0px 0px 0px;
  font-size: 23px;
`
const SubTitle = styled.p`
  margin: 0px 0px;
  color: ${mainTheme.quaternary};
  text-align: center;
  justify-self: center;
`
const TitleBar = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.filepath ? props.filepath : "/assets/dogs/no-dog.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px 20px 30px 20px;
  position: relative;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
`
const Content = styled.div`
  height: 109px;
  width: 100%;
  background-color: transparent;
  border-radius: 0px 0px 20px 20px;
  z-index: 2px;
  position: relative;
  bottom: 109px;
  margin-bottom: -109px;
  background-image: url("/assets/card-overlay.svg");
  background-image: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`
const BottomTitle = styled.div`
  padding: 10px;
  color: #6b6b6b;
`