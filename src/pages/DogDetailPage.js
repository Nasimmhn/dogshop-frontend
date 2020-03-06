import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faRulerCombined, faDog, faMapMarkedAlt, faBirthdayCake, faPaw, faMars, faVenus, faCalendarAlt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'
import moment from 'moment'

// fetchDog function (from reducer)
import { fetchDog } from 'reducers/dogdata'


export const DogDetailPage = () => {
  const dispatch = useDispatch()
  const { dogId } = useParams()

  const dog = useSelector((state) => state.dogdata.dog)

  console.log("DOG", dog)
  useEffect(() => {
    console.log("dogId", dogId)
    dispatch(fetchDog(dogId))
    console.log("dog in useEffect:", dog)
  }, [dispatch, dogId])

  return (
    <SectionWrapper>
      <Card>
        <Image src={dog.images} />
        <Content>
          <TitleBar>
            <FlexWrapper>
              <SubTitle><FontAwesomeIcon icon={faMapMarkedAlt} /> {dog.location}</SubTitle>

              <SubTitle><FontAwesomeIcon icon={faMoneyBillWave} /> {dog.price} SEK</SubTitle>
            </FlexWrapper>
            <FlexWrapper>
              <Title>{dog.name}</Title>
            </FlexWrapper>
            <GridWrapper>
              <SubTitle align={"start"}><FontAwesomeIcon icon={faBirthdayCake} /> {dog.age}</SubTitle>
              <SubTitle align={"end"}><FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /> {dog.sex}</SubTitle>
              <SubTitle align={"start"}><FontAwesomeIcon icon={faDog} /> {dog.group}</SubTitle>
              <SubTitle align={"end"}><FontAwesomeIcon icon={faRulerCombined} /> {dog.size}</SubTitle>
            </GridWrapper>
          </TitleBar>
          <FlexWrapper>
            <BottomTitle> {dog.description}</BottomTitle>
          </FlexWrapper>
          <FlexWrapper justify={"center"}>
            <BottomTitle><FontAwesomeIcon icon={faCalendarAlt} /> {"Published: ".concat(moment(new Date(dog.addedAt)).format("Do MMM YYYY"))}</BottomTitle>
          </FlexWrapper>
        </Content>
      </Card >
    </SectionWrapper>
  )
}



/* ------ STYLING ------ */

const SectionWrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: beige;
  justify-content: center;
  
`
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