import React from 'react'
import styles from './footer.module.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.logo}>Logo</h2>
        <p className={styles.slogan}>© 2023 Made in Zyber</p>
      </div>
      <div className={styles.item}>
        <div>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </div>
        <p>admin@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
