import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

export const mainTheme = ({
  primary: '#196DFA',
  secondary: '#BF8F7E',
  tertiary: '#CC5D2F',
  quaternary: '#5D412C',
  quinary: '#f7d6d4',
  blackish: '#17140D',
  whiteish: '#F2EFEF',
  grayish: '#BAAEAA',
})

// export const mainTheme = ({
//   primary: '#196DFA',
//   secondary: '#BF8F7E',
//   tertiary: '#CC5D2F',
//   quaternary: '#171A2B',
//   quinary: '#EFAEA9',
//   blackish: '#17140D',
//   whiteish: '#F2EFEF',
//   grayish: '#BAAEAA',
// })

/*
#196DFA - blue           primary
#BF8F7E - dark beige     seconary
#CC5D2F - orange         tertiary
#5D412C - brown          quaternary
#17140D - blackish       blackish
#EFAEA9 - pink           quinary
#BAAEAA - gray           grayish
#F2EFEF - whiteish       whiteish
*/

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${mainTheme.blackish};
    font-family: 'Roboto';
    background-color: ${mainTheme.whiteish};
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




