import React from 'react'
import { Link } from 'react-router-dom'

// Styled components
import styled from 'styled-components/macro'

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faWeightHanging, faRulerCombined, faDog, faEnvelope, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faAddressCard, faPhone, faMale } from '@fortawesome/free-solid-svg-icons'

// Moment
import moment from 'moment'

// Global theme
import { mainTheme } from '../../lib/GlobalStyle'

export const DogDetailCard = ({ dog }) => {

  return (

    <>
      <SmallCardWrapper>
        <ContactCard>
          <InfoContainer>
            <Title><FontAwesomeIcon icon={faAddressCard} /> Contact information </Title>
            <hr />
            <GridIconWrapper>
              <FontAwesomeIcon icon={faMale} /> <Text>{dog.owner.name}</Text>
              <FontAwesomeIcon icon={faMapMarkedAlt} /> <Text>{dog.location}</Text>
              <FontAwesomeIcon icon={faPhone} /> <Text>{dog.phone ? dog.phone !== "" : "-"}</Text>
              <FontAwesomeIcon icon={faEnvelope} /> <Text>{dog.owner.email}</Text>
            </GridIconWrapper>
            <FlexWrapper justifyContent={"center"} alignItems={"flex-start"}>
              <a href={`mailto:${dog.owner.email}`}><Button> Contact seller</Button ></a>
            </FlexWrapper>
          </InfoContainer>
        </ContactCard>

        <BreedCard>
          <InfoContainer>
            <Title> <FontAwesomeIcon icon={faPaw} /> {dog.breed.name}</Title>
            <hr />
            <GridIconWrapper>
              <FontAwesomeIcon icon={faDog} /><Text> {dog.breed.group.join(', ')}</Text>
              <FontAwesomeIcon icon={faBolt} /><Text> {dog.breed.activity.join(', ')}</Text>
              <FontAwesomeIcon icon={faRulerCombined} /><Text> {dog.breed.size.join(', ')}</Text>
              <FontAwesomeIcon icon={faWeightHanging} /><Text> {dog.breed.weight} </Text>
            </GridIconWrapper>
            <FlexWrapper justifyContent={'center'}>
              <Link to={`/breed/${dog.breed._id}`} tabIndex='-1'><Button> Read more</Button ></Link>
            </FlexWrapper>
          </InfoContainer>
        </BreedCard>
      </SmallCardWrapper>

      <DogCard>
        <Image filepath={dog.images.url} />
        <Content>
          <FlexWrapper flexDirection={'column'} alignItems={"flex-start"}>
            <FlexWrapper flexDirection={'column'} alignItems={"flex-start"} width={"100%"}>

              <FlexWrapper flexDirection={'row'} justifyContent={'space-between'} width={"100%"}>
                <Title> {dog.name} <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /></Title>
                <Title> {dog.price} SEK</Title>
              </FlexWrapper>

              <Text>{dog.description}</Text>

            </FlexWrapper>

            <GridIconWrapper>
              <FontAwesomeIcon icon={faBirthdayCake} /><Text> {moment(dog.birthdate).format('YYYY-MM-DD')}  ({moment(dog.birthdate).fromNow(true)} old)</Text>
              <FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /><Text> {dog.sex}</Text>
            </GridIconWrapper>

          </FlexWrapper>
          <FlexWrapper>

          </FlexWrapper>
          <hr />
          <FlexWrapper justifyContent={"center"}>
            <GridIconWrapper>
              <FontAwesomeIcon icon={faCalendarAlt} /><BottomTitle> {"Published: ".concat(moment(new Date(dog.addedAt)).fromNow())}</BottomTitle>
            </GridIconWrapper>
          </FlexWrapper>
        </Content>
      </DogCard>



    </>


  )
}



/* ------ STYLING ------ */

const GridIconWrapper = styled.div`
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
  max-width: 700px;
  
  @media (min-width: 669px) and (max-width: 1145px) {
    max-width: unset;
  }
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
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-grow: ${props => props.flexGrow};
`

const Title = styled.h1`
font-family: 'Raleway';
  color: ${mainTheme.tertiary};
  margin: 5px 0px;
  font-size: 23px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`
const Text = styled.p`
  color: ${mainTheme.blackish};
  font-size: 15px;
  text-align: ${props => props.textalign};
  justify-self: ${props => props.justifyself};;
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

const Button = styled.button`
  margin-top: 10px;
  background: ${mainTheme.tertiary};
  border-radius: 20px;
  color: ${mainTheme.whiteish};
  padding: 8px;
  width:200px;
  font-size:15px;
  font-weight:bold;
  transition: 0.2s; 
  border:  1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid ${ mainTheme.tertiary};
    color: ${ mainTheme.tertiary};
    transition: 0.1s;
  }
`
