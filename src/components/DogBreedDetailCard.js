import React from 'react'

// Styled components
import styled from 'styled-components/macro'

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog, faPaw, faBolt, faWeightHanging, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

// Paths to assets
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'

export const DogBreedDetailCard = ({ dogBreed }) => {
  return (

    <CardContainer>

      <BreedCard>
        <FlexWrapper flexDirection={'row'} flexWrap={'wrap'}>

          <Image src={PATHS.dog_races.concat(dogBreed.images.url)} />

          <DataInfo>
            <SubTitle> Summary</SubTitle>
            <GridIconWrapper>
              <FontAwesomeIcon icon={faDog} /><Text> {dogBreed.group.join(', ')}</Text>
              <FontAwesomeIcon icon={faBolt} /><Text> {dogBreed.activity.join(', ')}</Text>
              <FontAwesomeIcon icon={faRulerCombined} /><Text> {dogBreed.size.join(', ')}</Text>
              <FontAwesomeIcon icon={faWeightHanging} /><Text> {dogBreed.weight} </Text>
              <FontAwesomeIcon icon={faHeartbeat} /><Text> {dogBreed.lifespan} </Text>
            </GridIconWrapper>
          </DataInfo>

          <MainInfo>
            <Title><FontAwesomeIcon icon={faPaw} /> {dogBreed.name}</Title>
            <Text>{dogBreed.description}</Text>
          </MainInfo>

        </FlexWrapper>

      </BreedCard >
    </CardContainer>
  )
}


/* ------ STYLING ------ */
const CardContainer = styled.div`
  padding: 40px;
  border-radius: 15px;
  width: 100%;
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    margin: 20px 0px 0px 0px;
  }
  /* Mobile */
  @media (max-width: 375px) {
    padding: 10px 10px 30px 10px;
    margin: 50px 0px 0px 0px;
  }
`

const BreedCard = styled.div`
  border-radius: 15px;
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: auto;
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr 1fr;
  }
`
const DataInfo = styled.div`
  padding: 20px;
  width: 50%;
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;
    padding: 20px 0px;
  }
`


const Image = styled.img`
  width: 50%;
  -webkit-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  -moz-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  border-radius: 20px;
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    width: 100%;
  }
`

const MainInfo = styled.div`
  padding: 20px 0px;
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    padding: 10px 0px 20px 0px;
  }
`

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: ${props => props.flexWrap};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
const GridIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  & > * {
    margin: 4px 0px;
  }
  & > svg {
    color: ${mainTheme.blackish};
    justify-self: center;
  }
  /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    grid-template-columns: 30px auto 30px auto;
  }
  /* Mobile */
  @media (max-width: 375px) {
    grid-template-columns: 30px auto;
  }
`

const Title = styled.h1`
  color: ${mainTheme.tertiary};
  margin: 5px 0px;
  font-size: 30px;
  /* Mobile */
  @media (max-width: 375px) {
    font-size: 20px;
  }
`

const SubTitle = styled.h3`
  color: ${mainTheme.quaternary};
  margin: 5px 5px;
  font-size: 20px;
  text-align: ${props => props.textalign};
  justify-self: ${props => props.justifyself};;
`

const Text = styled.p`
  color: ${mainTheme.blackish};
  font-size: 15px;
  text-align: ${props => props.textalign};
  justify-self: ${props => props.justifyself};;
`
