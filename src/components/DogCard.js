import React from 'react'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'

// Path to 
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const DogCard = ({ dog }) => {

  console.log(PATHS.dogs.concat(dog.images.url))
  return (
    <Card>
      <VisibleContainer>
        <Image filepath={PATHS.dogs.concat(dog.images.url)} />
        <Content>
          <TitleBar>
            <FlexWrapper flexdirection={"column"} justify={"space-evenly"}>
              <Title>{dog.name} <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></Title>
              <SubTitle>{dog.race.name} <FontAwesomeIcon icon={faPaw} /></SubTitle>
            </FlexWrapper>
          </TitleBar>
        </Content>
      </VisibleContainer>

      <HiddenContainer>
        <FlexWrapper flexdirection={"column"} justify={"center"}>
          <GridWrapper>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <HiddenText> {dog.location} </HiddenText>

            <FontAwesomeIcon icon={faMoneyBillWave} />
            <HiddenText>  {dog.price} SEK </HiddenText>

            <FontAwesomeIcon icon={faBirthdayCake} />
            <HiddenText> {moment(dog.birthdate).fromNow(true)} </HiddenText>
          </GridWrapper>
        </FlexWrapper>
        <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"Published: ".concat(moment(new Date(dog.addedAt)).fromNow())}</BottomTitle>
      </HiddenContainer>

    </Card >
  )
}

/* ------ STYLING ------ */

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
`
const HiddenContainer = styled.div`
  color: ${mainTheme.quinary};
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const BottomTitle = styled.div`
  margin-bottom: 20px;
  color: ${mainTheme.whiteish};
`
const VisibleContainer = styled.div`
  z-index: 2;
  position: relative;
`
const HiddenText = styled.h3`
  color: ${mainTheme.whiteish};
  margin: 10px 0px;
  font-size: 25px;
`

const Card = styled.div`  
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  &:hover ${VisibleContainer} {
    filter: brightness(15%);
    transition: 0.4s;
  }
  &:hover ${HiddenContainer} {
    z-index: 5;
    transition: 0.4s;
  }
  
`

const Image = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;

  background-image: url(${props => props.filepath ? props.filepath : "/assets/dogs/no-dog.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px 20px 30px 20px;

  -webkit-box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 13px 3px rgba(0,0,0,0.75);
`
const Content = styled.div`
  height: 109px;
  width: 100%;
  background-color: transparent;
  border-radius: 0px 0px 20px 20px;
  position: relative;
  bottom: 109px;
  margin-bottom: -109px;
  background-image: url("/assets/card-overlay.svg");
  background-image: cover;
  background-position: center;
  background-repeat: no-repeat;
  
`
const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexdirection ? props.flexdirection : "row"};
  justify-content: ${props => props.justify ? props.justify : "space-between"};
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
