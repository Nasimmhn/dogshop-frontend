import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog } from '@fortawesome/free-solid-svg-icons'

// Paths to assets
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'


export const DogBreedCard = ({ dogBreed }) => {

  return (

    <BreedCard >
      <Image src={PATHS.dog_races.concat(dogBreed.images.url)} />
      <Content>

        <Title>{dogBreed.name}</Title>


        <GridWrapper>
          <FontAwesomeIcon icon={faDog} /><SubTitle>{dogBreed.group.join(', ')} </SubTitle>
          <FontAwesomeIcon icon={faRulerCombined} /><SubTitle>{dogBreed.size.join(', ')} </SubTitle>
        </GridWrapper>

      </Content>
    </BreedCard >

  )
}


/* ------ STYLING ------ */

const BreedCard = styled.div`
  color: ${mainTheme.blackish};
  background-color: ${mainTheme.whiteish};
  border-bottom: solid 1px ${mainTheme.whiteish} ;
  height: 120px;
  margin-bottom:10px;
  display: flex;
  padding:5px 15px;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  &:hover {
    border-bottom: solid 1px ${mainTheme.tertiary};
    filter: brightness(85%);
    background-color:${mainTheme.whiteish};
    transition: 0.4s;
  }
`
const Image = styled.img`
  align-self: center;
  justify-self: center;
  height: 90%;
  border-radius: 50%;
`

const Content = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


const Title = styled.h1`
  color: ${mainTheme.blackish};
  width: 100%;
  font-size: 18px;
  padding: 0px  10px;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: ${props => props.flexWrap};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 100px;
  grid-auto-rows: auto;
  && > * {
    align-self: center;
  }
  /* Mobile */
  @media (max-width: 375px) {
    grid-template-columns: 40px 100px;
  }
`

const SubTitle = styled.span`
  margin: 3px 0px;
  color: ${mainTheme.blackish};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`
