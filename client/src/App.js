import React from 'react';
import { Player } from './features/podcast/Player';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.AppHeader}>
        <h1>PodcastAway</h1>
      </header>
      <Player />
    </div>
  );
}

export default App;
