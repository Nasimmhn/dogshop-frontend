import React from 'react'

// Styled components
import styled from 'styled-components/macro'


// Components
import { MemberAddDog } from '../components/MemberAddDog'
import { MemberInfo } from '../components/MemberInfo'


// Global color theme
import { mainTheme } from '../lib/GlobalStyle'



export const MemberPage = () => {



  return (
    <>
      <TopSection>
        Top section - Profile
      </TopSection>

      <SectionWrapper>
        <GridWrapper>
          <MemberAddDog />
          <MemberInfo />
        </GridWrapper>
      </SectionWrapper>
    </>
  )
}



const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

`

/* ------ STYLING ------ */

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
  background: url('assets/pink-pattern_a.jpg');
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
  border-radius: 0px 0px 50px 50px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
  /* Tablet & Mobile */
  @media (min-width: 0px) and (max-width: 668px) {
    border-radius: 0px;
    flex-direction: column;
    align-items: center;
  }
`
