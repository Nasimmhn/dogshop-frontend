import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { createDogAd } from '../reducers/dogdata'





const BreedOptions = [
  { value: 'Chihuahua', label: 'Chihuahua' },
  { value: 'Golder retriver', label: 'Golder retriver' },
  { value: 'Akita', label: 'Akita' },
  { value: 'Toy poodle', label: 'Toy poodle' },
  { value: 'Jack Russell Terrier', label: 'Jack Russell Terrier' },
  { value: 'Siberian Husky', label: 'Siberian Husky' },
]



export const MemberAddDog = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [sex, setSex] = useState('')


  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createDogAd({ sex, breed, price, description, phone })) // Sending the form values to the thunk in reducer
  }



  return (
    <StyledForm onSubmit={handleSubmit}>

      <Label>
        <LabelText>Name *</LabelText>
        <Input
          onChange={event => setName(event.target.value)}
          type='text'
          placeholder='Type name here'
          required
        />
      </Label>

      <Select
        theme={selectCustomTheme}
        placeholder={"Select a breed"}
        options={BreedOptions}
        onChange={setBreed}
      />


      <Label>
        <LabelText>Gender *</LabelText>
        <RadioWrapper>
          <RadioInput
            onChange={event => setSex(event.target.value)}
            type='radio'
            name='sex'
            value='Male'
          />
          <RadioText>Male</RadioText>
        </RadioWrapper>
        <RadioWrapper>
          <RadioInput
            onChange={event => setSex(event.target.value)}
            type='radio'
            name='sex'
            value='Female'
          />
          <RadioText>Female</RadioText>
        </RadioWrapper>
      </Label>

      <Label>
        <LabelText>Description *</LabelText>
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
      <Button type='submit' title='Submit'
      > Submit </Button>

    </StyledForm>
  )
}




/* ------ STYLING ------ */

// Select custom Theme 
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
  padding: 10px 0;
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
