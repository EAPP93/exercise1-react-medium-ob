import { useState } from 'react'

function useCounter(initialCount = 0, max = 100, min = -100, initialStep = 1) {
  const [counter, setCounter] = useState(initialCount)
  const [step, setStep] = useState(initialStep)
  const [maxCounter, setMaxCounter] = useState(max)
  const [minCounter, setMinCounter] = useState(min)

  
  const increment = () => {
    setCounter(counter + step <= maxCounter ? counter + step : counter)
  }

  const decrement = () => {
    setCounter(counter - step >= minCounter ? counter - step : counter)
  }

  const reset = () => {
    setCounter(0)
    setMaxCounter(max)
    setMinCounter(min)
  }

  const setMaxCount = (max) => {
    const value = parseInt(max, 10)
    if (value > minCounter){
      setMaxCounter(value)
      if (counter > max) { setCounter(max) }
    }
  }

  const setMinCount = (min) => {
    const value = parseInt(min, 10)
    if (value < maxCounter){
      setMinCounter(value)
      if (counter < min) { setCounter(min) }
    }
  }

  const setstep = (step) => setStep(parseInt(step, 10))

  return {
    counter, increment, decrement, reset, setMaxCount, setMinCount, setstep
  }
}

export default useCounter