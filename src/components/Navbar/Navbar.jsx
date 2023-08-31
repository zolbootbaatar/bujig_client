import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const links = [
    {
        name: 'Home',
        path: '/',
    }
];

const Navbar = () => {
  return (
    <div className={styles.container}>        
          <Link className={styles.logo} to='/'>Logo</Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link to={link.path} className={styles.link} >{link.name}</Link>
          ))}
        </div>
    </div>
  )
}

export default Navbar
