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
              <NavLink style={getLinkStyle} to="/course">
                강의
              </NavLink>
            </li>
            <li>
              <NavLink style={getLinkStyle} to="/reviews">
                수강 후기
              </NavLink>
            </li>
            {/* <li>
              <NavLink style={getLinkStyle} to='/portfolio'>
                  포트폴리오
              </NavLink>
            </li> */}
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
