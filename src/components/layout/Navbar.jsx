import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill, BsPencilSquare } from 'react-icons/bs';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1>Houedu</h1>
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <Link to="/">Home</Link>
            <Link to="/courses">강의</Link>
          </div>
          <div className={styles.navRight}>
            <Link to="/carts">
              <BsCartPlusFill />
            </Link>
            <Link to="/courses/new">
              <BsPencilSquare />
            </Link>
            <button>Login</button>
            <button>Logout</button>
            <button>SignUp</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
