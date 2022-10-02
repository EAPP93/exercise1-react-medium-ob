import React, { useRef } from 'react'
import styles from './List.module.css'
import useList from './../hooks/useList'
import ListContainer from './ListContainer'

function List() {
  const tasks = useList()
  const taskRef = useRef()

  const add = (e) => {
    e.preventDefault()
    tasks.push(taskRef.current.value)
  }

  const remove = (index) => {
    tasks.remove(index)
  }

  // value={newTask} onChange={handleInputChange}

  return (
    <div className={styles.container}>
      <h1 className={styles.title} >List</h1>
      <form onSubmit={add} className={styles.inputContainer}>
        <input type='text' ref={taskRef} className={styles.input} placeholder=' input'></input>
        <button className={styles.btn} type='submit'> ADD taks</button>
      </form>

      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => tasks.reset()}>Reset</button>
        <button className={styles.btn} onClick={() => tasks.Sort()}>Sort</button>
        <button className={styles.btn} onClick={() => tasks.Reverse()}>Reverse</button>
      </div>
      <ListContainer remove={remove} list={tasks.list} isEmpty={tasks.isEmpty}/>
    </div>
  )
}

export default List