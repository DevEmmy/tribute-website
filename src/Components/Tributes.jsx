import React from 'react'
import { tributes } from './data'
import { Text, Card, TributeContainer } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Tributes = () => {

  return (
    <TributeContainer>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        tributes.map((_, i)=>{
            return(
                <SwiperSlide>
                <Card>
                    <Text first fontSize="14px" color="white" centered family="niconne">
                       { '"' + _.tribute.trim()} 
                    </Text>

                    <Text centered fontSize="12px" color='white' padding="15px">
                        {"-" + _.by.trim()}
                    </Text>
                    
                    </Card>
                </SwiperSlide>
                
                
            )
        })
      }
    </Swiper>
    </TributeContainer>
  )
}

export default Tributes