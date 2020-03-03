import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDogRaces } from 'reducers/dogdata'

import { DogRaceItem } from 'components/DogRaceItem'
import { SectionWrapper, FilterWrapper, DogItemWrapper } from '../lib/MainSectionStyle'



export const DogRaces = () => {
  const dispatch = useDispatch()
  const allDogRaces = useSelector((state) => state.dogdata.dogRaceItems)

  const [name, setName] = useState('')
  const [activity, setActivity] = useState('')
  const [group, setGroup] = useState('')
  const [size, setSize] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  console.log("DogRaces.js serachQuery", searchQuery)
  // const handleFilterButtons = (filterQuery) => {
  //   setQuery(filterQuery)
  // }

  useEffect(() => {
    setSearchQuery(`?name=${name}&activity=${activity}&group=${group}&size=${size}`)
    dispatch(fetchDogRaces(searchQuery))

    // setParam(allRaces)

  }, [searchQuery])

  //map over the races here
  return (
    <SectionWrapper>
      <FilterWrapper>
        filter
      </FilterWrapper>
      <DogItemWrapper>
        {allDogRaces.map((dog) => (
          <DogRaceItem
            key={dog._id}
            name={dog.name}
            activity={dog.activity.join(', ')}
            group={dog.group.join(', ')}
            size={dog.size.join(', ')}
            imageUrl={"assets/dog_races/".concat(dog.images.url)}
          />
        ))}
      </DogItemWrapper>
    </SectionWrapper>
  )
}