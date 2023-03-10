import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsCartPlusFill, BsPencilSquare } from 'react-icons/bs';
import styles from './Navbar.module.scss';
import Logo from '../common/Logo';
// import { isLoggedInVar } from 'apollo';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.navLeft}>
            <li>
              <Link to="/courses">강의</Link>
            </li>
            <li>
              <Link to="/reviews">수강평</Link>
            </li>
            <li>
              <Link to="/portfolio">수강생 작품</Link>
            </li>
          </ul>
          <div className={styles.navRight}>
            <div>
              <Link to="/login" className={styles.login}>
                Log in
              </Link>
              <Link to="/signup" className={styles.signup}>
                Sign Up
              </Link>
            </div>
            <div>
              <button>nickname</button>
              <div className={styles.myMenu}>
                <Link to="/carts">
                  <BsCartPlusFill />
                </Link>
                <span>내 강의실</span>
                <span>마이페이지</span>
                <button>Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

// export default function Navbar() {
//   const [showLogin, setShowLogin] = useState(true);
//   const [showMenu, setShowMenu] = useState(false);

//   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//   console.log('current user:', currentUser);

//   const location = useLocation();
//   console.log('Navbar Location', location);

//   if (currentUser && currentUser.isAuth === true) {
//     if (showLogin === true) {
//       setShowLogin(false);
//     }
//     if (showMenu === false) {
//       setShowMenu(true);
//     }
//   }

//   const logout = () => {
//     console.log(currentUser.id, 'currentUser.id');
//     // updateUserAuthStatus(currentUser.id, { isAuth: false });
//     // currentUser.isAuth = false;
//     localStorage.setItem('currentUser', JSON.stringify(currentUser));
//     if (showLogin === false) {
//       setShowLogin(true);
//     }
//     if (showMenu === true) {
//       setShowMenu(false);
//     }
//     //  localStorage
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <Logo />
//         <nav className={styles.nav}>
//           <ul className={styles.navLeft}>
//             <li>
//               <Link to="/courses">강의</Link>
//             </li>
//             <li>
//               <Link to="/reviews">수강평</Link>
//             </li>
//             <li>
//               <Link to="/portfolio">수강생 작품</Link>
//             </li>
//           </ul>
//           <div className={styles.navRight}>
//             {showLogin && (
//               <div className={styles.showLogin}>
//                 <Link to="/login" className={styles.login}>
//                   Log in
//                 </Link>
//                 <Link to="/signup" className={styles.signup}>
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//             {showMenu && (
//               <div className={styles.showMenu}>
//                 <button>{currentUser.nickname}</button>
//                 <div className={styles.myMenu}>
//                   <Link to="/carts">
//                     <BsCartPlusFill />
//                   </Link>
//                   <span>내 강의실</span>
//                   <span>마이페이지</span>
//                   <button onClick={logout}>Logout</button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }
