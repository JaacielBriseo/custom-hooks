import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }   
     const reset = () => {
        //if(counter === 0) return
        setCounter(initialValue)
    }    
    const decrement = (value = 1) => {
        setCounter(counter - value)
    }

    return{
        counter,
        increment,
        reset,
        decrement,
    }
}