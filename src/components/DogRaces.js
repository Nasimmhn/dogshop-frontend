import React from 'react'
import { useSelector } from 'react-redux'



export const DogRaces = () => {
  const race = useSelector((state) => state.dograces.races)
  //map over the races here
  return (
    <>

    </>
  )

}