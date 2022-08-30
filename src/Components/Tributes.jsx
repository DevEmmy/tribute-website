import React from 'react'
import { tributes } from './data'
import { Text } from './styles'

const Tributes = () => {
  return (
    <div>
        {tributes.map((_,i)=>{
            return(
                <div key={i}>
                    <Text>
                        {_.tribute}
                    </Text>

                    <Text>
                        {_.by}
                    </Text>
                </div>
            )
        })}
    </div>
  )
}

export default Tributes