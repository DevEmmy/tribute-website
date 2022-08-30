import React from 'react'
import { data } from './data'
import { BiographyContainer, Text } from './styles'

const Biography = () => {
  return (
    <BiographyContainer>
        <Text>
            Biography
        </Text>

        <Text fontSize="12px" textAlign="justify">
           {data.biography} 
        </Text>
        
    </BiographyContainer>
  )
}

export default Biography