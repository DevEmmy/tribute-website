import React from 'react'
import { data } from './data'
import { DetailsContainer, Text } from './styles'

const Details = () => {
  return (
    <DetailsContainer>
        <Text>
            Memorial Service
        </Text>

        <Text>
            Where
        </Text>

        <Text>
            {data.location}
        </Text>
        <Text>
            Zoom Id: {data.zoomId}
        </Text>

        <Text>
            Password: {data.zoomPasscode}
        </Text>

        <Text>
            When
        </Text>

        <Text>
            {data.date}
        </Text>

        <Text>
            {data.time}
        </Text>

    </DetailsContainer>
  )
}

export default Details