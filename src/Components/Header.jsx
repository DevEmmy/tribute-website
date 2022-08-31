import React, { useState } from 'react'
import { data } from './data'
import { HeaderContainer, Icon, NavBarContainer, Text } from './styles'
import {HiMenuAlt2, HiX} from "react-icons/hi"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    
  const navigate = ()=>{
    console.log("hey")
  };
  const [showNav, setShowNav] = useState(false)

  const items = [

    {
      title: "Home",
      link: "#home"
    },
    {
      title: "Biography",
      link: "#biography"
    },
    {
      title: "Gallery",
      link: "#gallery"
    },
    {
      title: "Details",
      link: "#details"
    },
    {
      title: "Tributes",
      link: "#tributes"
    }
  ]

  if(showNav){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = "visible"
  }
  

  const Nav = ()=>{
    return(
      <NavBarContainer>
        <Icon>
          <HiX color='white' size={20} onClick={()=> setShowNav(false)}/>
        </Icon>
          {
            items.map((_, i)=>{
              return(
                
                  <Text
                color='white'
                centered
                fontSize="20px"
                padding="20px 0"
                onClick={()=>{setShowNav(false)}}>
                  <a href={_.link}>
                    {_.title}
                  </a>
                  
                </Text>
                
              )
            })
          }
      </NavBarContainer>
    )
  }
  return (
    <HeaderContainer id='home'>

      <Icon>
        <HiMenuAlt2 size={30} color="white"
        onClick={()=> setShowNav(!showNav)}
        />
      </Icon>
        <Text fontSize="30px" padding="0" textAlign="center" color='white'
        family="niconne">
            {data.title}
        </Text>
        <Text color='rgb(255,155,200)' fontSize="30px" fontWeight="600" padding="0"  centered={true}
        shadow="0 10px 50px rgba(0,0,0,0.3)"
        >
            {data.name}
        </Text>

        {showNav && <Nav />}
    </HeaderContainer>
  )
}

export default Header