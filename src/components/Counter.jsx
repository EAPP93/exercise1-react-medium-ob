import React ,{ useRef }from 'react'
import useCounter from '../hooks/useCounter';
import styles from './counter.module.css'

function Counter() {
  const count = useCounter();
  const stepRef = useRef();

  const maxRef = useRef();
  const minRef = useRef();

  const setStep = () => {
    count.setstep(stepRef.current.value)
  }

  const setMax = () => {
    count.setMaxCount(maxRef.current.value)
  }

  const setMin = () => {
    count.setMinCount(minRef.current.value)
  }

  return (
    <div className={styles.container} >
      <h1 className={styles.container__title} >Counter</h1>
      <div className={styles.container__value}>
        <h2>{count.counter}</h2>
      </div>
      <div className={styles.container__btnCount}>
        <button className={styles.btn} onClick={count.increment}> + </button>
        <button className={styles.btn} onClick={count.reset}> Reset </button>
        <button className={styles.btn} onClick={count.decrement}> - </button>
      </div>
      <div className={styles.container__minMax}>
        <button className={styles.btn} onClick={() => setMax()}>Max</button>
        <input className={styles.input} ref={maxRef} placeholder='100' />
        <button className={styles.btn} onClick={() => setMin()}>MIN</button>
        <input className={styles.input} ref={minRef} placeholder='-100' />
      </div>
      <div className={styles.container__inputStep} >
        <button className={styles.btn} onClick={() => setStep()} > Change Step </button>
        <input className={styles.input} ref={stepRef} placeholder='1' />
      </div>
    </div>
  )
}

export default Counter