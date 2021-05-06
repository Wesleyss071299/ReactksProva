import React from 'react'
import { ChooseNumber } from './styles';
const NumberButton: React.FC<{range: number}> = (props) => {
    let numbers = []
    for (let i = 0; i < props.range; i++) {
        numbers.push(i)
    }
    return(
        <ChooseNumber>
            {numbers.map((item) => <div>{+item + 1}</div>)}
        </ChooseNumber>
    )
}  

export default NumberButton;