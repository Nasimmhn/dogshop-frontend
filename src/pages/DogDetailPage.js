import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

// Components
import { DogDetailCard } from '../components/DogDetailCard'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'

// fetchDog function ( reducer)
import { fetchDog } from '../reducers/dogdata'


export const DogDetailPage = () => {
  const dispatch = useDispatch()
  const { dogId } = useParams()


  const dog = useSelector((state) => state.dogdata.dog)
  useEffect(() => {
    dispatch(fetchDog(dogId))
  }, [dispatch, dogId])


  return (

    <SectionWrapper>
      {dog &&
        <DogDetailCard dog={dog} />
      }
    </SectionWrapper>
  )
}



/* ------ STYLING ------ */

const SectionWrapper = styled.section`
  background-color: ${mainTheme.lightgray};
  flex-grow: 1;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
 /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 1145px) {
    padding: 50px 10px 20px 10px;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
 `