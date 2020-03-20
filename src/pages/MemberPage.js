import React from 'react'
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

      <SectionWrapper>
        <Header>Overview</Header>

        <MenuWrapper>
          <ButtonCard onClick={handleShowProfile} selected={showProfile}>
            <Title>Profile</Title>
          </ButtonCard>

          <ButtonCard onClick={handleShowCreateDogForm} selected={showCreateDogForm}>
            <Title> Create Ad </Title>
          </ButtonCard>

          <ButtonCard onClick={handleShowDogList} selected={showDogList}>
            <Title> Show Ads </Title>
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


const Header = styled.h1`
  text-align: center;
  @media (min-width: 0px) and (max-width: 410px) {
    font-size: 12px;
  }
`


const Title = styled.span`
  text-align: center;
  font-size: 15px;
  @media (min-width: 0px) and (max-width: 410px) {
    font-size: 12px;
  }
`


const ButtonCard = styled.div`
  padding: 20px;
  height: 20px;  
  max-width: 200px;
  width: 100%;
  cursor:pointer;
  background-color: ${props => props.selected ? `${mainTheme.whiteish}` : "transparent"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 5px 5px 0px 0px;
  border-color: ${props => props.selected ? 'transparent' : `${mainTheme.blackish}`};
  &&:hover {
    font-weight: bold;
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
  border-left: 1px solid ${mainTheme.whiteish};
  border-right: 1px solid ${mainTheme.whiteish};
  background-color: ${ mainTheme.grayish};
  width: 100%;
  display: grid;
  grid-template-columns: 100px 150px 120px;
  align-items: flex-start;
  && > div {
    justify-self: center;
  }
  @media (min-width: 0px) and (max-width: 410px) {
    grid-template-columns: 75px 105px 105px;
  }

`


const SectionWrapper = styled.section`
  background-color: ${mainTheme.lightgray};
  /* background: url("/assets/pink-pattern_a.jpg"); */
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  /* border-radius: 0px 0px 50px 50px; */
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px;
  /* Tablet & Mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    flex-direction: column;
    align-items: center;
  }
`