import React from 'react'
import Gallery from './assets/Gallery'
import { data } from './data'
import { DetailsContainer, Text } from './styles'

const Details = () => {
  return (
    <DetailsContainer>
        <Text color='white' centered fontSize="40px" family="niconne">
            Memorial Service
        </Text>

        <div className="details">
        <Text color='white'>
            Where
        </Text>

        <Text color='white' fontSize="12px">
            {data.location}
        </Text>
        <Text color='white' fontSize="12px">
            Zoom Id: {data.zoomId}
        </Text>

        <Text color='white' fontSize="12px">
            Password: {data.zoomPasscode}
        </Text>

        <Text color='white' margin="20px 0 0 0">
            When
        </Text>

        <Text color='white' fontSize="12px">
            {data.date}
        </Text>

        <Text color='white' fontSize="12px">
            {data.time}
        </Text>
        </div>

        
        <Gallery />
    </DetailsContainer>
  )
}

export default Details