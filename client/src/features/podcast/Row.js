import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from './Row.module.css';

import {
  addToPlaylist,
  selectActiveItem,
  playing,
  selectPlaying,
  setActiveItem,
} from './podcastSlice';

export function Row({ podcast, index }) {
  const audioElement = useRef(new Audio(podcast.audio));
  const dispatch = useDispatch();
  const active = useSelector(selectActiveItem);
  const playing = useSelector(selectPlaying);

  useEffect(() => {
    if (playing && podcast.id === active.id) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  })


  const playSong = (el) => {
    dispatch(setActiveItem(el));
  }

  return (
    <Draggable key={podcast.audio} draggableId={podcast.id} index={index} >
      {(provided) => (
        <div className={styles.Row}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <img className={styles.rowImage} src={podcast.image} />
          <div className={styles.rowContent}>
            {podcast.name}<br />
            {podcast.title}
          </div>
          <button onClick={() => playSong(podcast)} className={styles.rowPlayButton}>
            <FontAwesomeIcon icon={(active.id === podcast.id && playing) ? faPause : faPlay} size='2x' />
          </button>
        </div>
      )}
    </Draggable>

  )
}
