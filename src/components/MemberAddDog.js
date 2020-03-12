import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components/macro'
import Select from 'react-select'

// From reducer
import { createDogAd, fetchDogBreeds } from '../reducers/dogdata'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


let BreedOptions = []

export const MemberAddDog = () => {

  const classes = useStyles()

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userdata.user)

  // BreedOptions populated by fetching from API
  const breeds = useSelector((state) => state.dogdata.dogBreeds)
  breeds.map((breed) => BreedOptions.push({ "value": breed._id, "label": breed.name }))

  // console.log(breeds)
  useEffect(() => {
    dispatch(fetchDogBreeds(""))
  }, [dispatch])

  const [name, setName] = useState('')
  const [selectedBreed, setSelectedBreed] = useState('')
  const [sex, setSex] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    let newDog = {
      "name": name,
      "race": selectedBreed.value,
      "sex": sex,
      "birthdate": birthdate,
      "description": description,
      "price": price,
      "location": location,
      "phone": phone,
      "owner": user._id
    }
    dispatch(createDogAd(newDog, user)) // Sending the form values to the thunk in reducer
  }



  return (
    <StyledForm onSubmit={handleSubmit}>

      <FlexWrapper flexdirection={"column"}>
        <Label>
          <LabelText>Name *</LabelText>
          <Input
            onChange={event => setName(event.target.value)}
            type='text'
            placeholder='Type name here'
            required
          />
        </Label>
        <Label>
          <LabelText>Dog breed *</LabelText>
          <Select
            theme={selectCustomTheme}
            placeholder={"Select a dog breed"}
            options={BreedOptions}
            onChange={setSelectedBreed}
          />
        </Label>
      </FlexWrapper>

      <FlexWrapper flexdirection={"row"}>
        <FlexWrapper flexdirection={"column"} justify={"space-center"}>
          <LabelText>Gender *</LabelText>

          <Label htmlFor="male">
            <RadioWrapper>
              <RadioInput
                onChange={event => setSex(event.target.value)}
                type='radio'
                id="male"
                name='sex'
                value='Male'
                required
              />
              <RadioText>Male</RadioText>
            </RadioWrapper>
          </Label>
          <Label htmlFor="female">
            <RadioWrapper>
              <RadioInput
                onChange={event => setSex(event.target.value)}
                type='radio'
                name='sex'
                id="female"
                value='Female'
                required
              />
              <RadioText>Female</RadioText>
            </RadioWrapper>
          </Label>


        </FlexWrapper>

        <Label className={classes.container} noValidate>
          <LabelText>Birthdate *</LabelText>
          <TextField
            id="date"
            type="date"
            onChange={event => setBirthdate(event.target.value)}
            defaultValue={""}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Label>
      </FlexWrapper>
      <Label>
        <LabelText>Description</LabelText>
        <TextAreaInput
          onChange={event => setDescription(event.target.value)}
          type='text'
          rows='4'
          placeholder='Type here..' />
      </Label>

      <Label>
        <LabelText>Price *</LabelText>
        <Input
          onChange={event => setPrice(event.target.value)}
          type='number'
          placeholder='SEK'
          required
        />
      </Label>

      <Label>
        <LabelText>Location *</LabelText>
        <Input
          onChange={event => setLocation(event.target.value)}
          type='text'
          placeholder='Stockholm, Göteborg...'
          required
        />
      </Label>

      <Label>
        <LabelText>Phone *</LabelText>
        <Input
          onChange={event => setPhone(event.target.value)}
          placeholder='Phone number'
          required
        />
      </Label>
      <Button type='submit' title='Submit'>
        Submit
      </Button>

    </StyledForm>
  )
}




/* ------ STYLING ------ */

// Dog breed selector custom theme 
const selectCustomTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#a6b1e1',
      primary: '#a6b1e1',
    }
  }
}
// Styling of date-picker
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}))
const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexdirection ? props.flexdirection : "row"};;
  justify-content: ${props => props.justify ? props.justify : "space-between"};
`

const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  height: 45px;
  min-width: 60px;
  border: 3px solid #fff;
  border-radius: 6px;
  background: rgba(0,0,0, 0.2);
  transition: 0.6s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: gray;
  }
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 5px;
  }
  @media (min-width: 450px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    padding: 0 15px;
  }
`
export const Form = styled.form`
  margin: 15px 0;
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
    padding: 20px 40px;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`
const Label = styled.label`
  width: 100%;
  padding: 5px 0;
`
const LabelText = styled.p`
  margin: 15px 0 8px 0;
  font-size: 14px;
  font-weight: bold;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 0;
`
const RadioText = styled.p`
  margin: 0;
`
const RadioInput = styled.input`
  width: 30px;
  padding: 10px;
`
const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  resize: "none";
  border: 2px solid #e6e6e6;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`

const StyledForm = styled(Form)`
  background: rgba(255,255,255, 0.4);
`
