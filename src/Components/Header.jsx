import React from 'react'
import { data } from './data'
import { HeaderContainer, Text } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
        <Text fontSize="30px" padding="0" textAlign="center" color='white'
        family="niconne">
            {data.title}
        </Text>
        <Text color='rgb(255,155,200)' fontSize="30px" fontWeight="600" padding="0"  centered={true}
        shadow="0 10px 50px rgba(0,0,0,0.3)"
        >
            {data.name}
        </Text>
    </HeaderContainer>
  )
}

export default Header