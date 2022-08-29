import styled from "styled-components"

export const Text = styled.p`
    font-size: ${({fontSize})=> fontSize || "18px"};
    font-weight: ${({fontWeight})=> fontWeight || "500"};
    padding: ${({padding})=> padding || "10px"};
    margin: ${({margin})=> margin || "1px"};
    color: ${({color})=> color || "#000"};
    text-align: ${({centered})=> centered ? "center" : "start"};
    font-family: ${({family})=> family || "serif"};
`

export const Card = styled.div`
    padding: ${({padding})=> padding || "10px"};
    margin: ${({margin})=> margin || "0px"};
    border-radius:${({radius})=>  radius || "10px"};
    background-color: ${({bg})=> bg || "transparent"};
`

export const HeaderContainer = styled.div`
    
`