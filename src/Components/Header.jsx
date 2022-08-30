import React from 'react'
import { data } from './data'
import { HeaderContainer, Text } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
        <Text>
            {data.title}
        </Text>
        <Text>
            {data.name}
        </Text>
    </HeaderContainer>
  )
}

export default Header