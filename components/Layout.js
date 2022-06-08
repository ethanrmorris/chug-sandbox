import Link from 'next/link';

import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.gridLayout}>
      <div className={styles.navBar}>
        <header className={styles.header}>Nav Bar</header>
        <nav className={styles.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/trades">
            <a>Trades</a>
          </Link>
          <Link href="/stats">
            <a>Stats</a>
          </Link>
          <Link href="/owners">
            <a>Owners</a>
          </Link>
          <Link href="/players">
            <a>Players</a>
          </Link>
          <Link href="/supabase">
            <a>Supabase</a>
          </Link>
        </nav>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
