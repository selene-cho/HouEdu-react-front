import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlusFill, BsPencilSquare } from 'react-icons/bs';
import styles from './UserMenu.module.scss';

export default function UserMenu() {
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
          NickName
        </button>
        {isOpen && (
          <ul className={styles.popup}>
            <Link to="/carts">
              <li>
                <BsCartPlusFill />
              </li>
            </Link>
            <li>내강의실</li>
            <li>마이페이지</li>
            <li>로그아웃</li>
          </ul>
        )}
      </div>
    </>
  );
}
