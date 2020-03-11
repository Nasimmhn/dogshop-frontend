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
            <SubTitle align={"end"}><FontAwesomeIcon icon={dog.sex === "Female" ? faVenus : faMars} /> {dog.sex}</SubTitle>
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

