import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'


export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    font-family: 'Roboto';
    background-color: #F0F1F8;
    height:100% !important;
    min-height: 100vh;
    width:100%;
    min-width: 340px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 0px 50px;
  } 

  #root {
    height:100%;
    min-height:100vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } 
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  } 
  h1, h2, h3, h4, h5, h6 {
    margin:0px;
  }
`

