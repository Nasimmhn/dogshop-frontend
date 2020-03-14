import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog, faPaw, faCalendarAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'

// Paths to assets
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const DogBreedDetailCard = ({ dogBreed }) => {
  return (

    <CardWrapper>

      <BreedCard>
        <Image src={PATHS.dog_races.concat(dogBreed.images.url)} />
        <Content>
          <TitleBar>
            <FlexWrapper>
              <SubTitle><FontAwesomeIcon icon={faAddressCard} /> {dogBreed.name}</SubTitle>
            </FlexWrapper>
            <FlexWrapper>
              <Title>{dogBreed.name} <FontAwesomeIcon icon={faPaw} /></Title>
            </FlexWrapper>
            <GridWrapper>
              <SubTitle align={"start"}><FontAwesomeIcon icon={faDog} /> {dogBreed.group.join(', ')}</SubTitle>
              <SubTitle align={"end"}><FontAwesomeIcon icon={faRulerCombined} /> {dogBreed.size.join(', ')}</SubTitle>
            </GridWrapper>
          </TitleBar>
          <FlexWrapper>
            <BottomTitle> {dogBreed.description}</BottomTitle>
          </FlexWrapper>
          <FlexWrapper justify={"center"}>
            <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"temp"}</BottomTitle>
          </FlexWrapper>
        </Content>
      </BreedCard >
    </CardWrapper>
  )
}


/* ------ STYLING ------ */
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

const BreedCard = styled.div`
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