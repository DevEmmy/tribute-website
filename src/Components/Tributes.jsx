import React from 'react'
import { tributes } from './data'
import { Text, Card } from './styles'
import ReactCardCarousel from "react-card-carousel";

const Tributes = () => {
    const CARD_STYLE = {
            position: "relative",
            // height: "100vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle",
            padding: 0,
            margin: 0,
            // marginTop: "100px"
            
        };

  return (
    <div style={CARD_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
            {tributes.map((_,i)=>{
            return(
                <Card bg="blue" key={i}>
                    <Text fontSize="5px">
                        {_.tribute}
                    </Text>

                    <Text>
                        {_.by}
                    </Text>
                </Card>
            )
        })}
        </ReactCardCarousel>
        
    </div>
  )
}

export default Tributes