import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { List } from './List'

import styles from './Player.module.css';

import {
  addPodcast,
  deletePodcast,
  loadLocalPodcasts,
  fetchRemotePodcasts,
  selectLocalPodcasts,
  selectRemotePodcasts,
  updateLocalStorage,
  updateLocalPodcasts,
} from './podcastSlice';

export function Player() {
  const remote = useSelector(selectRemotePodcasts);
  const local = useSelector(selectLocalPodcasts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRemotePodcasts());
    dispatch(loadLocalPodcasts());
  }, [])

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    //if local element is dropped anywhere on screen, delete it and refresh local storage
    if ((source.droppableId === 'Local' && destination === null)
      || (source.droppableId === 'Local' && destination.droppableId === 'Remote')) {
      dispatch(deletePodcast(draggableId));
      dispatch(updateLocalStorage());
    }//if any other element doesn't have a destination, do nothing 
    else if (destination === null) {
      return;
    }//save podcast
    else if (source.droppableId === 'Remote' && destination.droppableId === 'Local') {
      const item = remote.find(x => x.id === draggableId);
      dispatch(addPodcast(item));
      dispatch(updateLocalStorage());
    }//local->local rearrange
    else if (source.droppableId === 'Local' && destination.droppableId === 'Local') {
      const list = [...local];
      const item = list.find(x => x.id === draggableId);
      list.splice(source.index, 1);
      list.splice(destination.index, 0, item);
      dispatch(updateLocalPodcasts(list));
      dispatch(updateLocalStorage());
    }//do nothing 
    else {
      return;
    }
  }
  return (
    <div className={styles.Player}>
      <DragDropContext onDragEnd={onDragEnd} >
        <List list={'Remote'} podcasts={remote} />
        <br />
        <List list={'Local'} podcasts={local} />
      </DragDropContext>
    </div>
  )
}
