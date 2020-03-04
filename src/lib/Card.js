import React from "react"
import styled from "styled-components/macro"



export const Container = styled.div`
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
      border-radius: 6px;
      background: white;
      margin-bottom: 20px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`
export const Secondarytext = styled.p`
  margin: 0;
  color: #6b6b6b;
  `

export const Thumbnail = styled.div`
  width:70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`

export const TitleBar = styled.div`
  display: flex;
  align-items: center;

`

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;

`

export const Content = styled.div`
  padding: 20px;
`

export const ChildrenContent = styled.div`
  background: #ccc;
  padding: 10px;
`