import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { List } from './List'
import {
  addPodcast,
  deletePodcast,
  setLocalPodcasts,
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

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(result);
    //if local element is dropped anywhere on screen, delete it and refresh local storage
    if (destination === null && source.droppableId === 'Local') {
      dispatch(deletePodcast(draggableId));
      dispatch(updateLocalStorage());
    } else if (destination === null) {
      return;
    } else if (destination.droppableId === 'Remote' && source.droppableId === 'Local') {
      dispatch(deletePodcast(draggableId));
      dispatch(updateLocalStorage());
    } else if (source.droppableId === 'Remote' && destination.droppableId === 'Local') {
      const item = remote.find(x => x.id === draggableId);
      dispatch(addPodcast(item));
      dispatch(updateLocalStorage());
    } else if (source.droppableId === 'Local' && destination.droppableId === 'Local') {
      const list = [...local];
      const item = list.find(x => x.id === draggableId);
      list.splice(source.index, 1);
      list.splice(destination.index, 0, item);
      dispatch(updateLocalPodcasts(list));
      dispatch(updateLocalStorage());
    } else {
      return;
    }
  }

  React.useEffect(() => {
    dispatch(fetchRemotePodcasts());
    dispatch(setLocalPodcasts());
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List list={'Remote'} podcasts={remote} />
      <br />
      <List list={'Local'} podcasts={local} />
    </DragDropContext>
  )
}
