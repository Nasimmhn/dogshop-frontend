import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { MyDogCard } from './MyDogCard'

// Style component
import styled from 'styled-components/macro'

// query
import { dogdata } from '../../reducers/dogdata'







export const MyDogList = () => {

  const userId = window.sessionStorage.getItem('userId')
  const userDogs = useSelector(state => state.dogdata.dogs)
  console.log("userId: ", userId)

  const dispatch = useDispatch()

  dispatch(dogdata.actions.setDogFilter(`?userId=${userId}`))

  return (
    <FlexWrapper>
      {userDogs.map(item =>
        <MyDogCard
          key={item._id} 
          item={item}
        />
      )}
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  `

