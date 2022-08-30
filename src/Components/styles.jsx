import styled from "styled-components"
import bg1 from "./assets/bg1.jpg"

export const Text = styled.p`
    font-size: ${({fontSize})=> fontSize || "18px"};
    font-weight: ${({fontWeight})=> fontWeight || "500"};
    padding: ${({padding})=> padding || "0px"};
    margin: ${({margin})=> margin || "1px"};
    color: ${({color})=> color || "#000"};
    text-align: ${({centered})=> centered ? "center" : "start"};
    font-family: ${({family})=> family || "poppins"};
    width: ${({width})=> width || "auto"};
    text-shadow: ${({shadow})=> shadow || "none"};
`

export const Card = styled.div`
    padding: ${({padding})=> padding || "10px"};
    margin: ${({margin})=> margin || "0px"};
    border-radius:${({radius})=>  radius || "10px"};
    background-color: ${({bg})=> bg || "transparent"};
    width: 120%;
    box-sizing: border-box;
    height: 200px;
`

export const HeaderContainer = styled.div`
    height: 100vh;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BiographyContainer = styled.div`
    padding: 20px ;
    background-color: #DDD7C6;
`

export const DetailsContainer = styled.div`
    
`

export const Images = styled.div`

`