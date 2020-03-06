import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { DogDetailCard } from '../components/DogDetailCard'

// fetchDog function (from reducer)
import { fetchDog } from 'reducers/dogdata'

export const DogDetailPage = () => {
  const dispatch = useDispatch()
  const { dogId } = useParams()


  const dog = useSelector((state) => state.dogdata.dog)
  useEffect(() => {
    dispatch(fetchDog(dogId))
  }, [dogId])


  return (

    <SectionWrapper>
      {dog &&
        <DogDetailCard
          dog={dog}

        />
      }
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