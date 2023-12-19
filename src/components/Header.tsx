import styles from '@styles/header/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <span>NKE</span>
        </div>
        <nav className={styles.nav}>
          <span>company</span>
          <span>customize</span>
          <span>product</span>
          <span>process</span>
          <span>support</span>
        </nav>
      </div>
    </header>
  );
}
