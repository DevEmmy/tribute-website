import styled from "styled-components"
import bg2 from "./assets/bg2.JPG"

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

    &::first-letter{
        font-size: ${({first})=> first && "60px"};
    }
    
`

export const Card = styled.div`
    width: 90%;
    box-sizing: border-box;
    min-height: 200px;
    border-radius: 10px;
    background-color: ${({bg})=> bg};
    color: white;
    padding: 10px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;

    
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

    img{
        width: 100%;
        height: auto;
        padding: 10px 0;
    }
`

export const DetailsContainer = styled.div`
    padding: 50px 20px;
    background: url(${bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    
`

export const Images = styled.div`

`

export const GalleryContainer = styled.div`
    /* background-color: black;  */

    .carousel{
        position: relative;
        // height: "100vh",
        width: 100%;
        /* display: flex; */
        flex: 1;
        justify-content: center;
        align-items: middle;
        padding: 200px 0;
        /* margin: 100px 0; */
       
    }
    
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const TributeContainer = styled.div`
    padding: 100px 0 30px;
    background: #C1A1BF;
`

export const Icon = styled.div`
    /* display: flex; */
    position: fixed;
    width: 100%;
    background-color: black;
    top: 0px;
    left: 0px;
    z-index: 10000000000000;
    padding: 10px 20px;
`

export const NavBarContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000000000000;
`

export const DIContainer = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    z-index: 10000000000000;
    display: flex;
    align-items: center;
    

    img{
        width: 100%;
        max-height: 100vh;
        object-fit: cover;
    }
`