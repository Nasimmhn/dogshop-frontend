import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog, faEnvelope, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave, faAddressCard, faPhone, faInfo, faMale, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'
import moment from 'moment'

// Paths to assets
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const DogDetailCard = ({ dog }) => {

  return (

    <CardWrapper>
      <SmallCardWrapper>
        <ContactCard>
          <InfoContainer>
            <Title><FontAwesomeIcon icon={faAddressCard} /> Contact information </Title>
            <hr />
            <GridWrapper>

              <FontAwesomeIcon icon={faMale} /> <SubTitle>{dog.owner.name}</SubTitle>
              <FontAwesomeIcon icon={faMapMarkedAlt} /> <SubTitle>{dog.location}</SubTitle>
              <FontAwesomeIcon icon={faPhone} /> <SubTitle>{dog.phone ? dog.phone !== "" : "-"}</SubTitle>
              <FontAwesomeIcon icon={faEnvelope} /> <SubTitle>{dog.owner.email}</SubTitle>

            </GridWrapper>
            <FlexWrapper justify={'center'}>
              <a href={`mailto:${dog.owner.email}`}><ContactButton> Contact seller</ContactButton ></a>
            </FlexWrapper>
          </InfoContainer>
        </ContactCard>

        <BreedCard>
          <InfoContainer>
            <Title> <FontAwesomeIcon icon={faPaw} /> {dog.race.name}</Title>
            <hr />
            <GridWrapper>

              <FontAwesomeIcon icon={faInfoCircle} /><SubTitle> {dog.race.description}</SubTitle>
              <FontAwesomeIcon icon={faDog} /><SubTitle> {dog.race.group.join(', ')}</SubTitle>
              <FontAwesomeIcon icon={faRulerCombined} /><SubTitle> {dog.race.size.join(', ')}</SubTitle>

            </GridWrapper>
            <FlexWrapper justify={'center'}>
              <a href={`/dogbreed/${dog.race._id}`}><ContactButton> Read more</ContactButton ></a>
            </FlexWrapper>
          </InfoContainer>
        </BreedCard>
      </SmallCardWrapper>

      <DogCard>
        <Image filepath={PATHS.dogs.concat(dog.images.url)} />
        <Content>
          <TitleBar>

            <FlexWrapper flexdirection={'column'}>

              <FlexWrapper flexdirection={'row'} justify={'space-between'}>
                <Title> {dog.name} <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></Title>
                <Title> {dog.price} SEK</Title>
              </FlexWrapper>
              <SubTitle>{dog.description}</SubTitle>
            </FlexWrapper>

            <GridWrapper>
              <FontAwesomeIcon icon={faBirthdayCake} /><SubTitle> {moment(dog.birthdate).format('YYYY-MM-DD')}  ({moment(dog.birthdate).fromNow(true)} old)</SubTitle>
              <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /><SubTitle> {dog.sex}</SubTitle>
            </GridWrapper>


          </TitleBar>
          <FlexWrapper>

          </FlexWrapper>
          <hr />
          <FlexWrapper justify={"center"}>
            <GridWrapper>
              <FontAwesomeIcon icon={faCalendarAlt} /><BottomTitle> {"Published: ".concat(moment(new Date(dog.addedAt)).fromNow())}</BottomTitle>
            </GridWrapper>
          </FlexWrapper>
        </Content>
      </DogCard>



    </CardWrapper>


  )
}



/* ------ STYLING ------ */

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  & > * {
    margin: 4px 0px;
  }
  & > svg {
    justify-self: center;
    color: ${mainTheme.blackish}
  }
`
const CardWrapper = styled.div`
  flex-grow: 1;
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
 /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 1145px) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
  /* Mobile */
  @media (max-width: 375px) {
    margin: 50px 0px;;
    padding: 10px 10px 30px 10px;
  }
`

const SmallCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  /* Custom */
  @media (min-width: 669px) and (max-width: 1145px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
 /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    flex-direction: column-reverse;
  }
  /* Mobile */
  @media (max-width: 375px) {
  }
`

const DogCard = styled.div`
  margin: 10px;
  flex-grow: 1;
  
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;

  }
`
const BreedCard = styled.div`
  margin: 10px;
  min-width: 300px;
  width: 25%;
  /* Custom */
  @media (min-width: 669px) and (max-width: 1145px) {
    flex-grow: 1;
  }
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    min-width: unset;
    margin-top: 20px;
    width: 100%;
  }
`

const ContactCard = styled.div`
  margin: 10px;
  min-width: 300px;
  width: 25%;
  /* Custom */
  @media (min-width: 669px) and (max-width: 1145px) {
    flex-grow: 1;
  }
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    min-width: unset;
    margin-top: 20px;
    width: 100%;
  }
`

const InfoContainer = styled.div`
  background-color: ${mainTheme.whiteish};
  padding: 20px;
  border-radius: 20px;
  white-space: nowrap;
  
`
const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexdirection};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

const Title = styled.h1`
  color: ${mainTheme.tertiary};
  margin: 0px 0px 0px 0px;
  font-size: 23px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`
const SubTitle = styled.p`
  margin: 10px 0px 3px 0px;
  font-size: 15px;
  color: ${mainTheme.quaternary};
  text-align: ${props => props.textalign};
  justify-self: ${props => props.justifyself};;
`
const TitleBar = styled.div`
  display: flex;
  flex-direction:column;
  align-items: left;
`
const Image = styled.div`
  align-self: center;
  justify-self: center;
  width: 100%;
  height: 400px;
  background-image: url(${props => props.filepath ? props.filepath : "/assets/dogs/no-dog.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0px 0px;
  -webkit-box-shadow: inset 0px -8px 29px 0px rgba(23,20,13,0.69);
  -moz-box-shadow: inset 0px -8px 29px 0px rgba(23,20,13,0.69);
  box-shadow: inset 0px -8px 29px 0px rgba(23,20,13,0.69);
`
const Content = styled.div`
  width: 100%;
  background-color: ${mainTheme.whiteish};
  padding: 20px 20px 10px 20px;
  border-radius: 0px 0px 20px 20px;
`
const BottomTitle = styled.div`
  padding: 0px;
  color: ${mainTheme.blackish};
`

const ContactButton = styled.button`
  margin-top: 10px;
  background: ${mainTheme.tertiary};
  border-radius: 20px;
  color: ${mainTheme.whiteish};
  padding: 8px;
  width:200px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border-style: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: ${mainTheme.quaternary};
    color: ${mainTheme.whiteish};
    transition: 0.1s;
  }
`
