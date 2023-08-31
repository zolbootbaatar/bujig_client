import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Clothes Web</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quisquam magni necessitatibus earum commodi perspiciatis officia, minus voluptas cupiditate atque!</p>
        <button className={styles.button}><Link className={styles.link} to='/category'>Order clothes</Link></button>
      </div>
      <div className={styles.item}>
        <img className={styles.img} src="https://st2.depositphotos.com/5624298/10180/i/950/depositphotos_101803480-stock-photo-clothes-on-a-white-background.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home
