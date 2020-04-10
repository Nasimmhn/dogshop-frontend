/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Style component
import styled from 'styled-components/macro'
// Components
import { MyDogCard } from './MyDogCard'

// From reducer
import { fetchDogs, deleteDogAd } from '../../reducers/dogdata'

export const MyDogList = () => {
  const user = {
    _id: window.sessionStorage.getItem('userId'),
    accessToken: window.sessionStorage.getItem('accessToken')
  }
  const dispatch = useDispatch()
  const userDogs = useSelector((state) => state.dogdata.dogs)

  useEffect(() => {
    dispatch(fetchDogs(`?userId=${user._id}`))
  }, [dispatch, user._id])

  const handleDeleteAd = (dogId) => {

    dispatch(deleteDogAd(dogId, user))
  }

  return (
    <FlexWrapper>
      {userDogs.map((item) => <MyDogCard
        key={item._id}
        item={item}
        onClickDelete={() => handleDeleteAd(item._id)} />)}
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

