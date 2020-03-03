import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDogRaces } from 'reducers/dograces'
import { RaceItem } from 'components/RaceItem'



export const DogRaces = () => {
  const dispatch = useDispatch()
  const allRaces = useSelector((state) => state.dograces.races)

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
    <div className="dog-races">
      <div>

      </div>

      <div>
        {allRaces.map((race) => (
          <RaceItem
            key={race._id}
            name={race.name}
            activity={race.activity.join(', ')}
            group={race.group.join(', ')}
            size={race.size.join(', ')}
          />
        ))}
      </div>
    </div>
  )
}