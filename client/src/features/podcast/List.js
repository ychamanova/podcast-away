import React, { useState, } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Row } from './Row';
import styles from './List.module.css';

export function List({ list, podcasts }) {
  return (
    <div className={styles.List}>
      <Droppable droppableId={list}>
        {provided => (
          <div className={styles.ListDroppable}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {provided.placeholder}
            <h1 className={styles.ListTitle}>{list}</h1>
            {podcasts.map((p, i) => (<Row key={p.audio} podcast={p} index={i} />))}
          </div>
        )
        }
      </Droppable>
    </div>
  )
}
