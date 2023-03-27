import styles from './EditPassword.module.scss';

export default function EditPassword() {
  return (
    <div className={styles.container}>
      <form>
        <h1>비밀번호 변경</h1>
        <input
          type="password"
          name="old_password"
          placeholder="현재 비밀번호"
        />
        <input type="password" name="new_password" placeholder="새 비밀번호" />
        <input type="password" placeholder="새 비밀번호 확인" />
        <button type="submit">변경 완료</button>
      </form>
    </div>
  );
}
