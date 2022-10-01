import React, { useRef } from 'react'
import styles from './List.module.css'
import useList from './../hooks/useList'

function List() {
  const list = useList()
  console.log(`${list.value} hola desde list component`)
  const inputRef = useRef()

  const agregar = () => {
    list.push(inputRef.current.value)
  }

  const eliminar = (index) => {
    list.remove(index)
  }

  // TODO: refresh state when push sort or reverse

  return (
    <div className={styles.container}>
      <h1 className={styles.title} >List</h1>
      <div className={styles.inputContainer}>
        <input ref={inputRef} className={styles.input} placeholder=' input'></input>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => agregar()}>Agregar</button>
        <button className={styles.btn} onClick={list.reset}>Reset</button>
        <button className={styles.btn} onClick={list.sort}>Sort</button>
        <button className={styles.btn} onClick={list.reverse}>Reverse</button>
      </div>
      <ul className={styles.listContainer} >
        {list.value.map((el, index) => (
          <li key={index}>
            <p>{el}</p>
            <button onClick={() => eliminar(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List