import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from './Row.module.css';

import {
  selectActiveItem,
  selectPlaying,
  setActiveItem,
  selectLocalPodcasts
} from './podcastSlice';

export function Row({ podcast, index }) {
  //grab reference to the current podcast
  const audioElement = useRef(new Audio(podcast.audio));
  const dispatch = useDispatch();
  const active = useSelector(selectActiveItem);
  const playing = useSelector(selectPlaying);
  const local = useSelector(selectLocalPodcasts);

  audioElement.current.addEventListener("ended", () => {
    //if podcast has a property "local" set to true, on track "end" event play next podcast in local category
    if (podcast.local === true) {
      if (index === local.length - 1) {
        dispatch(setActiveItem(local[0]))
      } else {
        dispatch(setActiveItem(local[index + 1]));
      }
      //no local category, handle end of podcast for remote category
    } else {
      dispatch(setActiveItem({}));
    }
  })
  //configure when to play
  useEffect(() => {
    if (playing && podcast.id === active.id) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  })
  //clean up (if element gets deleted, pause playback)
  useEffect(() => {
    return () => {
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
            <h3 className={styles.rowTitle}>{podcast.name}</h3>
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
