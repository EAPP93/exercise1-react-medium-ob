import React from 'react'
import styles from './listContainer.module.css'


export default function ListContainer(props) {
  return (
    <ul className={styles.listContainer} >
      {
        props.isEmpty ?
          <p>task list is empty </p>
          :
          props.list.map((el, index) => (
            <li key={index}>
              <p>{el}</p>
              <button onClick={() => props.remove(index)}>delete</button>
            </li>
          ))
      }
    </ul>
  )
}
