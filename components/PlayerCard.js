import Link from 'next/link';

import styles from '../styles/PlayerCard.modules.scss';

export default function PlayerCard({ id }) {
  return (
    <>
      <Link href={`/players/${id.player_id}`}>
        <a>
          <div className={styles.card}>
            <h3>{id.full_name}</h3>
            <img
              src={`https://sleepercdn.com/content/nfl/players/${id.player_id}.jpg`}
            ></img>
            <h5>
              {id.team}
              {' - '}
              {id.number}
            </h5>
          </div>
        </a>
      </Link>
    </>
  );
}
