import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    font-family: 'Roboto';
    background-color: #f9f6f7;
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
