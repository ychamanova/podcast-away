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

const stockImage = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'

export function Row({ podcast, index }) {
  //grab reference to the current podcast
  const audioElement = useRef(new Audio(podcast.audio));
  const dispatch = useDispatch();
  const active = useSelector(selectActiveItem);
  const playing = useSelector(selectPlaying);
  const local = useSelector(selectLocalPodcasts);

  audioElement.current.addEventListener("ended", () => {
    //if podcast has a property "local" set to true
    if (podcast.local === true) {
      if (index === local.length - 1) {
        //last podcast finishes, stop playback
        dispatch(setActiveItem({}))
        //on track "end" event play next podcast in local category
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
          <img className={styles.rowImage} src={podcast.image || stockImage} />
          <div className={styles.rowContent}>
            <h2 className={styles.rowName}>{podcast.name}</h2>
            <h4 className={styles.rowTitle}>{podcast.title}</h4>
            {podcast.description}
          </div>
          <button onClick={() => playSong(podcast)} className={styles.rowPlayButton}>
            <FontAwesomeIcon icon={(active.id === podcast.id && playing) ? faPause : faPlay} size='1x' />
          </button>
        </div>
      )}
    </Draggable>
  )
}