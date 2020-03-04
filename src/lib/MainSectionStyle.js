import styled from 'styled-components/macro'




export const SectionWrapper = styled.section`
  width: 100%;
  background: rgba(255,255,255, 0.5);
  display: flex;
  


`

export const FilterWrapper = styled.div`
  width: 30%;
  background: yellow;
  color: #333;
  padding: 10px;
  display: flex;
  /* @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  } */
`

export const DogItemWrapper = styled.div`
  width: 70%;
  background: rgba(255,255,255, 0.5);
  color: #333;
  padding: 10px;
  display: flex;
  flex-direction: column;
/* 
  @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  } */
`

export const ItemWrapperInner = styled.div`
  width: 100%;
  background: rgba(255,255,255, 0.5);
  color: #333;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid black; 
`



export const InfoWrapper = styled.div`
 
`

export const Text = styled.p`
  font-size: 12px;
  margin: 5px 0;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 12px;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`

export const StyledImg = styled.img`
  width: 250px;
  @media (min-width: 668px) {
    width: 100px;
    height: 100px;
  }
`