import mock from '../../dummy/teachers.json';
import styles from './Teachers.module.scss';

export default function Teachers() {
  return (
    <div>
      <div>
        <ul className={styles.container}>
          {mock.teachers.map((item) => {
            return (
              <li key={item.id} className={styles.imgBox}>
                <img src={item.tch.tch_img} alt="teacher image" />
                <span>{item.tch.tch_name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
