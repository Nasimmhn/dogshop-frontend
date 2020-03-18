import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { DogList } from '../DogList'

// Style component
import styled from 'styled-components/macro'

// query
import { dogdata } from '../../reducers/dogdata'

export const MyDogList = () => {

  const userId = window.sessionStorage.getItem('userId')
  console.log("userId: ", userId)

  const dispatch = useDispatch()

  dispatch(dogdata.actions.setDogFilter(`?userId=${userId}`))

  return (
    <FlexWrapper>
      <DogList />
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `

