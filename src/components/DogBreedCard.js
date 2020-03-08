import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faRulerCombined, faDog, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import { PATHS } from 'App'


export const DogBreedCard = ({ dogBreed }) => {

  return (

    <Card>
      <Image src={PATHS.dog_races.concat(dogBreed.images.url)} />
      <Content>
        <TitleBar>
          <FlexWrapper>
            <Title>{dogBreed.name}</Title>
          </FlexWrapper>
          <GridWrapper>
            <SubTitle align={"start"}><FontAwesomeIcon icon={faDog} /> {dogBreed.group.join(', ')}</SubTitle>
            <SubTitle align={"end"}><FontAwesomeIcon icon={faRulerCombined} /> {dogBreed.size.join(', ')}</SubTitle>
          </GridWrapper>
        </TitleBar>
        <FlexWrapper justify={"center"}>
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
  width:calc(100%-20px);
  height: 100px;
  margin: 15px 15px 0px 15px;
  display: flex;
  flex-direction: row;
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
  height: 100%;
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