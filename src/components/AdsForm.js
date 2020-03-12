import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
// import { sendGuests } from 'reducers/guests'
// import { Button } from 'lib/Buttons'
// import { Form, Label, LabelText, Input, RadioWrapper, RadioText, RadioInput, TextAreaInput } from 'lib/FormStyles'




const BreedOptions = [
  { value: 'Chihuahua', label: 'Chihuahua' },
  { value: 'Golder retriver', label: 'Golder retriver' },
  { value: 'Akita', label: 'Akita' },
  { value: 'Toy poodle', label: 'Toy poodle' },
  { value: 'Jack Russell Terrier', label: 'Jack Russell Terrier' },
  { value: 'Siberian Husky', label: 'Siberian Husky' },
]

const groupOptions = [
  { value: 'Sport', label: 'Sport' },
  { value: 'Working', label: 'Working' },
  { value: 'Toy', label: 'Toy' },
  { value: 'Mixed breed', label: 'Mixed breed' },
  { value: 'Terrier', label: 'Terrier' },
  { value: 'Hound', label: 'Hound' },
  { value: 'Herding', label: 'Herding' },
]
const sizeOptions = [
  { value: 'XSmall', label: 'XSmall' },
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' },
  { value: 'XLarge', label: 'XLarge' },
]




export const AdsForm = () => {

  const dispatch = useDispatch()



  return (
    <StyledForm>
      <Select
        theme={selectCustomTheme}
        placeholder={"Select a breed"}
        options={BreedOptions}
      // onChange={setBreed}
      />
      <Select
        theme={selectCustomTheme}
        placeholder={"Select the group"}
        options={groupOptions}
      // onChange={setBreed}
      />
      <Label>
        <LabelText>Price *</LabelText>
        <Input
          type='number'
          placeholder='SEK'
        />
      </Label>
      <Select
        theme={selectCustomTheme}
        placeholder={"Size"}
        options={sizeOptions}
      // onChange={setBreed}
      />

      <Label>
        <LabelText>Gender *</LabelText>
        <RadioWrapper>
          <RadioInput
            type='radio'
            name='male'
          // value='male'
          />
          <RadioText>Male</RadioText>
        </RadioWrapper>
        <RadioWrapper>
          <RadioInput
            type='radio'
            name='female'
            // value='female'
            required
          />
          <RadioText>Female</RadioText>
        </RadioWrapper>
      </Label>
      <Label>
        <LabelText>Description *</LabelText>
        <TextAreaInput
          type='text'
          rows='4'
          placeholder='Type here...' />
      </Label>
      <Label>
        <LabelText>Place *</LabelText>
        <Input
          type='text'
          placeholder='Write your city here'
        />
      </Label>

      <Label>
        <LabelText>E-mail *</LabelText>
        <Input
          placeholder='mail@mail.com'
          required
          minLength='5'
          maxLength='100'
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
