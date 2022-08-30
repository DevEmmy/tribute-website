import React from 'react'
import { gallery } from '../gallery'
import { GalleryContainer, Text } from '../styles'
import ReactCardCarousel from "react-card-carousel";

const Gallery = () => {
    
  return (
    <GalleryContainer>
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
                <div className="img" key={i}>
                    <img src={img.img} alt="" />
                </div>
            )
        })} 
        </ReactCardCarousel>
        </div>
        
        
    </GalleryContainer>
  )
}

export default Gallery