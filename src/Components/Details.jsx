import React from 'react'
import Gallery from './assets/Gallery'
import { data } from './data'
import { DetailsContainer, Text } from './styles'

const Details = () => {
  return (
    <DetailsContainer>

        <Gallery />

        
        <Text color='white' centered fontSize="40px" family="niconne" id="details">
            Memorial Service
        </Text>

        <div className="details">
        <Text color='white'>
            Where
        </Text>

        <Text color='white' fontSize="12px">
            {data.location}
        </Text>
        <Text 
        color='white' 
        fontSize="12px" 
        padding="10px 0 0">
            Zoom Id: {data.zoomId}
        </Text>

        <Text color='white' fontSize="12px">
            Password: {data.zoomPasscode}
        </Text>

        <Text color='white' fontSize="12px" link>
            <a href={data.zoomLink}>Join Via Zoom Link</a>
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

    </DetailsContainer>
  )
}

export default Details