import { createGlobalStyle } from 'styled-components'

export const mainTheme = ({
  primary: '#196DFA',
  secondary: '#BF8F7E',
  tertiary: '#CC5D2F',
  quaternary: '#5D412C',
  quinary: '#F2EFEF',
  blackish: '#130d0c',
  whiteish: '#f9fafa',
  grayish: '#BAAEAA',
  lightgray: '#EFEBE9',
  lightbeige: '#a58881',
  darkbrown: '#2a211e',
  redish: '#af3432'
})




//new theme
// export const mainTheme = ({
//   primary: '#196DFA',
//   secondary: '#BF8F7E',
//   tertiary: '#CC5D2F',
//   quaternary: '#171A2B',
//   quinary: '#EFAEA9',
//   blackish: '#17140D',
//   whiteish: '#F2EFEF',
//   grayish: '#BAAEAA',
// whiteish: '#f0f0f7',
// lightgray: '#EFEBE9',
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
    background-color: ${mainTheme.whiteish};
    height:100% !important;
    min-height: 100vh;
    width: 100%;
    min-width: 250px;
    font-family: 'Montserrat', sans-serif;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    /* padding: 0px 50px; */

    /* Tablet & mobile */
    @media (min-width: 0px) and (max-width: 668px) {
      padding: 0px 0px;
    }
    /* Mobile */
    @media (max-width: 375px) {
    }
  } 

  #root {
    max-width: 1700px;
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




