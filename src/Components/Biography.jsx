import React from 'react'
import { data } from './data'
import { BiographyContainer, Text } from './styles'
import cert from "./assets/cerificate.jpg"

const Biography = () => {
  return (
    <BiographyContainer>

        <Text centered padding="20px 0">
            Biography
        </Text>

        <img src={cert} alt="" />

        <Text fontSize="12px" textAlign="justify">
           {data.biography} 
        </Text>
        
        
    </BiographyContainer>
  )
}

export default Biography