import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './UserMenu.module.scss';
import { FaCartPlus } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from '../../api/api';

const PHP_BASE_URL = 'http://13.125.223.139/lms/public/Courses?email=';

export default function UserMenu({ user }) {
  console.log('user', user);
  console.log('user.email', user.email);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.userMenu}>
        <button className={styles.button} onClick={handleButtonClick}>
          {user?.nickname}
        </button>
        {isOpen && (
          <ul className={styles.popup}>
            <Link to="/carts">
              <li>
                <FaCartPlus className={styles.carts} />
              </li>
            </Link>
            <Link to={`${PHP_BASE_URL}${user.email}`}>
              <li>내강의실</li>
            </Link>
            <Link to="/mypage">
              <li>마이페이지</li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}
