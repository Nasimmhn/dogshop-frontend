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
    <Container>
      <SectionWrapper>

        <HeaderWrapper>
          <Header>Profile Overview</Header>
        </HeaderWrapper>
        <MenuWrapper>
          <ButtonCard onClick={handleShowProfile} selected={showProfile}>
            <Title>Account</Title>
          </ButtonCard>

          <ButtonCard onClick={handleShowCreateDogForm} selected={showCreateDogForm}>
            <Title> Create Ad </Title>
          </ButtonCard>

          <ButtonCard onClick={handleShowDogList} selected={showDogList}>
            <Title> Ads history </Title>
          </ButtonCard>
        </MenuWrapper>

        <Dashboard>
          {showCreateDogForm && <CreateDog />}
          {showProfile && <Profile />}
          {showDogList && <MyDogList />}
        </Dashboard>

      </SectionWrapper>
    </Container>
  )
}


/* ------ STYLING ------ */

const HeaderWrapper = styled.div`
  height:150px;
  width: 100%;
  display: flex;
  padding-left:20px; 
`
const Header = styled.h2`
  font-size: 28px;
  font-weight:lighter;
  text-align: left;
  line-height:150px;
  @media (min-width: 0px) and (max-width: 410px) {
  }
`
const Title = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`
const ButtonCard = styled.div`
  padding: 20px;
  height: 70px;  
  max-width: 250px;
  width: 100%;
  cursor:pointer;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid ${mainTheme.lightgray};
  border-color: ${props => props.selected ? `${mainTheme.redish}` : `${mainTheme.grayish}`};
  &&:hover {
    font-weight: bold;
    border-color: ${mainTheme.darkbrown};
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
  /* border-left: 1px solid ${mainTheme.darkbrown};
  border-right: 1px solid ${mainTheme.darkbrown}; */
  background-color: transparent;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 150px 150px 150px; */
  align-items: flex-start;
  && > div {
    justify-self: center;
  }

`
const SectionWrapper = styled.section`
  -webkit-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  box-shadow: 0px 0px 15px -4px rgba(186,174,170,1);
  width:100%;
  max-width:900px;
  height:100%;
  flex-grow: 1;
  min-height: 700px;
  /* Tablet */
  @media (min-width: 0px) and (max-width: 668px) {
    flex-direction: column;
    align-items: center;
  }
`
const Container = styled.div`
  background-color: ${mainTheme.lightgray};
  width:100%;
  flex-grow: 1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`