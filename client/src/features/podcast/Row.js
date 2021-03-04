import React, { useState, } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export function Row({ podcast, index }) {
  return (
    <Draggable key={podcast.audio} draggableId={podcast.id} index={index}>
      {(provided) => (
        <div>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {podcast.name}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  )
}
