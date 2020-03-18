import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Styled components
import styled from 'styled-components/macro'


// Components
import { CreateDog } from '../components/Member/CreateDog'
import { Profile } from '../components/Member/Profile'
import { MyDogList } from '../components/Member/MyDogList'

// reducer
import { ui } from 'reducers/ui'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'


export const MemberPage = () => {
  const { showProfile, showCreateDogForm, showDogList } = useSelector(state => state.ui)

  const dispatch = useDispatch()

  const handleShowProfile = () => {
    dispatch(ui.actions.setShowProfile())
  }

  const handleShowCreateDogForm = () => {
    dispatch(ui.actions.setShowCreateDogForm())
  }
  const handleShowDogList = () => {
    dispatch(ui.actions.setShowDogList())
  }


  return (
    <>
      <TopSection>
        Top section - Profile
      </TopSection>

      <SectionWrapper>
        <MenuWrapper>

          <ButtonCard onClick={handleShowProfile} selected={showProfile}>
            <Title>Profile</Title>
            <InfoText> View and change your profile details </InfoText>
          </ButtonCard>

          <ButtonCard onClick={handleShowCreateDogForm} selected={showCreateDogForm}>
            <Title> Create New Ad </Title>
            <InfoText> Tell us about your dog </InfoText>
          </ButtonCard>

          <ButtonCard onClick={handleShowDogList} selected={showDogList}>
            <Title> Show My Ads </Title>
            <InfoText> Display list of the ads you have created </InfoText>
          </ButtonCard>
        </MenuWrapper>

        <Dashboard>
          {showCreateDogForm && <CreateDog />}
          {showProfile && <Profile />}
          {showDogList && <MyDogList />}
        </Dashboard>
      </SectionWrapper>
    </>
  )
}


/* ------ STYLING ------ */

const Title = styled.h3`
  text-align: center;
`

const InfoText = styled.p`
  text-align: center;
`

const ButtonCard = styled.div`
  padding: 20px;
  height: 200px;  
  max-width: 200px;
  width: 100%;
  background-color: ${props => props.selected ? 'red' : 'white'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 2px 2px 2px 3px rgba(23,20,13,1);
  -moz-box-shadow: 2px 2px 2px 3px rgba(23,20,13,1);
  box-shadow: 2px 2px 2px 3px rgba(23,20,13,1);
  border-radius: 10px;
  &&:hover {
    background-color: gray;
    -webkit-box-shadow: 0px 0px 10px 3px rgba(23,20,13,1);
    -moz-box-shadow: 0px 0px 10px 3px rgba(23,20,13,1);
    box-shadow: 0px 0px 10px 3px rgba(23,20,13,1);
  }
`


const Dashboard = styled.div`
  padding: 20px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`
const MenuWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  && > div {
    justify-self: center;
  }

`

const TopSection = styled.section`
  color: ${mainTheme.whiteish};
  background-color: ${mainTheme.blackish};
  border-radius: 50px 50px 0px 0px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* Tablet & Mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
  }
`

const SectionWrapper = styled.section`
  background-color: ${mainTheme.quinary};
  /* background: url("/assets/pink-pattern_a.jpg"); */
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  border-radius: 0px 0px 50px 50px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
  /* Tablet & Mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    flex-direction: column;
    align-items: center;
  }
`