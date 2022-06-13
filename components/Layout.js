import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Image src="/mlb.svg" width={80} height={50} alt={'Logo'} />
          <nav>
            <ul className={styles.mainNav}>
              <li>
                <Link href="/">
                  <a className={styles.navLink}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/trades">
                  <a className={styles.navLink}>Trades</a>
                </Link>
              </li>
              <li>
                <Link href="/stats">
                  <a className={styles.navLink}>Stats</a>
                </Link>
              </li>
              <li>
                <Link href="/owners">
                  <a className={styles.navLink}>Owners</a>
                </Link>
                <ul className={styles.subNav}>
                  <li>
                    <Link href="/owners/ethan">
                      <a className={styles.subNavLink}>Ethan</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/players">
                  <a className={styles.navLink}>Players</a>
                </Link>
              </li>
              <li>
                <Link href="/supabase">
                  <a className={styles.navLink}>Supabase</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
}
