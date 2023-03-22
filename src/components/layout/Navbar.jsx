import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from '../common/Logo';
import UserMenu from './UserMenu';
import useUser from '../hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';
import { logOut } from '../../api/api';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#0378a6' : '',
  };
}
export default function Navbar() {
  const { userLoading, isLoggedIn, user } = useUser();
  const queryClient = useQueryClient();
  const onLogOut = async () => {
    await logOut();
    queryClient.refetchQueries(['myinfo']);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.navLeft}>
            <li>
              <NavLink style={getLinkStyle} to="/courses">
                강의
              </NavLink>
            </li>
            <li>
              <NavLink style={getLinkStyle} to="/reviews">
                수강평
              </NavLink>
            </li>
            <li>
              <NavLink style={getLinkStyle} to="/portfolio">
                수강생 작품
              </NavLink>
            </li>
          </ul>
          <ul className={styles.navRight}>
            {!userLoading ? (
              !isLoggedIn ? (
                <>
                  <li>
                    <Link to="/login" className={styles.login}>
                      로그인
                    </Link>
                  </li>
                  <li className={styles.signup}>
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <UserMenu user={user} />
                  </li>
                  <li className={styles.logout} onClick={onLogOut}>
                    로그아웃
                  </li>
                </>
              )
            ) : null}
          </ul>
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
