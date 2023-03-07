import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill, BsPencilSquare } from 'react-icons/bs';
import styles from './Navbar.module.scss';
import Logo from '../common/Logo';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <span>
              <Link to="/courses">강의</Link>
            </span>
            <span>
              <Link to="/reviews">수강평</Link>
            </span>
            <span>
              <Link to="/gallery">수강생 작품</Link>
            </span>
          </div>
          <div className={styles.navRight}>
            <span>
              <Link to="/carts">
                <BsCartPlusFill />
              </Link>
            </span>
            <span>
              <Link to="/courses/new">
                <BsPencilSquare />
              </Link>
            </span>
            <span>
              <Link to="/login" className={styles.login}>
                Log in
              </Link>
            </span>
            <span>
              <Link to="/signup" className={styles.signup}>
                Sign Up
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
