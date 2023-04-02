import styles from './Modal.module.scss';
import { AiFillCloseSquare } from 'react-icons/ai';

export default function Modal(props) {
  const { open, close, header } = props;

  return (
    // <div className={`${styles.modal} ${open ? styles.openModal : ''}`}>
    <div className={open ? styles.openModal + ' modal' : styles.modal}>
      {open ? (
        <section>
          <header>
            {header}
            <button className={styles.close} onClick={close}>
              <AiFillCloseSquare />
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className={styles.close} onClick={close}>
              CLOSE
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
