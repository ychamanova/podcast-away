import React, { useState, } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from './Row.module.css';

export function Row({ podcast, index }) {
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
          <button className={styles.rowPlayButton}>
            <FontAwesomeIcon icon={faPlay} size='2x' />
          </button>
        </div>
      )}
    </Draggable>

  )
}
