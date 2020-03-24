import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'



export const LoadingSpinner = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
      {isLoading &&
        <LoadingWrapper>
          <Loader type='ThreeDots' color='#5D412C' height={80} width={80} />
        </LoadingWrapper>
      }
    </>
  )
}

const LoadingWrapper = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`