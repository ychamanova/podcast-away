import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { List } from './List'
import {
  setLocalPodcasts,
  fetchRemotePodcasts,
  selectLocalPodcasts,
  selectRemotePodcasts,
} from './podcastSlice';

export function Player() {
  const remote = useSelector(selectRemotePodcasts);
  const local = useSelector(selectLocalPodcasts);
  const dispatch = useDispatch();

  const onDragEnd = result => {
    console.log(result)
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
