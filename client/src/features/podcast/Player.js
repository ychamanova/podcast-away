import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleActive,
  setLocalPodcasts,
  setRemotePodcasts,
  savePodcast,
  fetchRemotePodcasts,
  selectRemotePodcasts,
  selectLocalPodcasts,
  fetchLocalPodcasts,
} from './podcastSlice';
import styles from './Counter.module.css';

export function Player() {
  const local = useSelector(selectLocalPodcasts);
  const remote = useSelector(selectRemotePodcasts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRemotePodcasts());
    dispatch(fetchLocalPodcasts());
  }, [])

  return (
    <div>
      <ol>{remote.map(p => (
        <div>{p.name}</div>
      ))}
      </ol>
      <ol>{local.map(p => (
        <div>{p.name}</div>
      ))}</ol>
      {/* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.usersButton}
          onClick={() => dispatch(fetchUsers())}
        >
          Fetch Users
        </button>
      </div>
      <div className={styles.usersRow}>{users.join(' | ')}</div> */}
    </div>
  );
}
