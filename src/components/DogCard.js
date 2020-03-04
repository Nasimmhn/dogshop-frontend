import React from 'react'
import styled from "styled-components/macro"

import moment from 'moment'

export const DogCard = ({ age, price, sex, location, race, imageUrl, addedAt, group, size }) => {
  console.log("addedAt", addedAt)
  return (

    <Container>
      <CoverImage src={imageUrl} />
      <Content>
        <TitleBar>
          <InfoWrapper>
            <Secondarytext>{location}</Secondarytext>
            <Title>{race.name}</Title>
            <Title> {price} SEK</Title>
          </InfoWrapper>
          <InfoWrapper>
            <Title>{age}</Title>
            <Title> {sex}</Title>
            <Title> {group}</Title>
            <Title> {size}</Title>
          </InfoWrapper>
        </TitleBar>
        <ChildrenContent> {moment(new Date(addedAt)).format("MMM Do")}</ChildrenContent>
      </Content>
    </Container>

  )
}


/* ------ STYLING ------ */
const InfoWrapper = styled.div`
 
`
const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #d1cebd;
  width:400px;
  margin: 0 15px;
`
const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`
const Secondarytext = styled.p`
  margin: 0;
  color: #6b6b6b;
`
const TitleBar = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`
const CoverImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`
const Content = styled.div`
  padding: 20px;
`
const ChildrenContent = styled.div`
  background: #ccc;
  padding: 10px;
`