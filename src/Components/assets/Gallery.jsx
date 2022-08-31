import React, { useState } from 'react'
import { gallery } from '../gallery'
import { DIContainer, GalleryContainer, Icon, Text } from '../styles'
import ReactCardCarousel from "react-card-carousel";
import { HiArrowLeft } from 'react-icons/hi';

const Gallery = () => {
    const [image, setImage] = useState();

    const DisplayImage = ()=>{
        return(
            <DIContainer>
                <Icon>
                    <HiArrowLeft color="white" size={20} onClick={()=> setImage(null)}/>
                </Icon>
                <img src={image} alt="" />
            </DIContainer>
        )
    }
  return (
    <GalleryContainer id="gallery">
        <Text centered padding="20px 0" color="white">
            Gallery
        </Text>

        <div className="carousel">
            <ReactCardCarousel autoplay={true} autoplay_speed={5000}
        padding="0"
        margin="0"
        >
           {gallery.map((img, i)=>{
            return(
                <div className="img" key={i} onClick={()=> setImage(img.img)}>
                    <img src={img.img} alt="" />
                </div>
            )
        })} 
        </ReactCardCarousel>
        </div>
        
        {image && <DisplayImage />}
    </GalleryContainer>
  )
}

export default Gallery