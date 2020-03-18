import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


// Styled components
import styled from 'styled-components/macro'

// React-select
import Select from 'react-select'

// From reducer
import { createDogAd } from '../../reducers/dogdata'
import { ui } from '../../reducers/ui'

// Materialize UI
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

// Global color theme
import { mainTheme } from '../../lib/GlobalStyle'


export const CreateDog = () => {
  const { message } = useSelector((state) => state.dogdata)

  const classes = useStyles()
  const dispatch = useDispatch()


  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [selectedBreed, setSelectedBreed] = useState('')
  const [sex, setSex] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')
  const [breedOptions, setBreedOptions] = useState([])


  // BreedOptions populated by fetching from API
  const fetchBreeds = () => {
    fetch(`http://localhost:8080/dogbreeds`)
      .then(res => res.json())
      .then(dogBreeds => {
        let options = []
        dogBreeds.map((breed) => options.push({ "value": breed._id, "label": breed.name }))
        setBreedOptions(options)
      }
      )
  }

  useEffect(() => {
    fetchBreeds()
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      _id: window.sessionStorage.getItem('userId'),
      accessToken: window.sessionStorage.getItem('accessToken')
    }

    let newDog = {
      "name": name,
      "image": image,
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
    document.getElementById("create-dog-form").reset();
    dispatch(ui.actions.setShowDogList())

  }

  if (message.success) {

  }
  if (message.error) {

  }





  return (
    <Form id={'create-dog-form'} onSubmit={handleSubmit}>

      <FlexWrapper flexDirection={"column"}>
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
          <LabelText> Upload an image</LabelText>
          <Input
            type="file"
            onChange={event => setImage(event.target.files[0])}
            accept=".jpg, .jpeg, .png"
          />
        </Label>

        <Label>
          <LabelText>Dog breed *</LabelText>
          <Select
            theme={selectCustomTheme}
            placeholder={"Select a dog breed"}
            options={breedOptions}
            onChange={setSelectedBreed}
          />
        </Label>
      </FlexWrapper>

      <FlexWrapper flexDirection={"row"}>
        <FlexWrapper flexDirection={"column"} justifyContent={"space-center"}>
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
      <FlexWrapper flexDirection={"row"} justifyContent={"space-between"}>
        <Label width={'90%'}>
          <LabelText>Price *</LabelText>
          <Input
            onChange={event => setPrice(event.target.value)}
            type='number'
            placeholder='SEK'
            required
          />
        </Label>

        <Label width={'90%'}>
          <LabelText>Location *</LabelText>
          <Input
            onChange={event => setLocation(event.target.value)}
            type='text'
            placeholder='Stockholm, Göteborg...'
            required
          />
        </Label>
      </FlexWrapper>
      <Label>
        <LabelText>Phone *</LabelText>
        <Input
          onChange={event => setPhone(event.target.value)}
          placeholder='Phone number'
          required
        />
      </Label>
      <StyledButton type='submit' title='Submit'>
        Submit
      </StyledButton>
      {message.success && <div> {message.success} </div>}
      {message.error && <div> {message.error} </div>}
    </Form>
  )
}




/* ------ STYLING ------ */
// const StyledForm = styled(Form)`
//   width: 100%;
//   min-width: 250px;
//   background: rgba(255,255,255, 0.4);
// `
const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin: 15px 0;
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

const StyledButton = styled(Button)`
  && {
    width: 100%;
    margin: 20px 0px;
    height: 50px;
    background-color: ${mainTheme.secondary};
  }
  &&:hover{
    background-color: ${mainTheme.tertiary};
  }
`

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
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
  align-items: ${props => props.alignItems};
`

const Label = styled.label`
  width: ${props => props.width ? props.width : "100%"};
  display: inline-block;
  padding: 0px 5px;
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
  box-sizing: border-box;
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
  resize: none;
  border: 2px solid #e6e6e6;
  border-radius: 3px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`

