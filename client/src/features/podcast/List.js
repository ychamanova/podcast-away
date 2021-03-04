import React, { useState, } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Row } from './Row';

export function List({ list, podcasts }) {
  return (
    <div>
      <title>{list}</title>
      <Droppable droppableId={list}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {podcasts.map((p, i) => (<Row key={p.audio} podcast={p} index={i} />))}
            {provided.placeholder}
          </div>
        )
        }

      </Droppable>
    </div>
  )
}
