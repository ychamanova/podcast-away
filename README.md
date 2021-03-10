<p align="center">
  <a href="" rel="noopener">
 <img width=700px height=auto src="https://i.imgur.com/C1jmWJx.png" alt="Project Snapshot"></a>
</p>

<h3 align="center">PodcastAway</h3>

---

<p align="center"> Play and save podcasts.
    <br> 
</p>

## ⛏️ Built Using
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework
-[ReduxJs](https://redux.js.org/) - State Container
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Drag and Drop Library

## 🧐 About

### Prerequisites
[npm package manager](https://www.npmjs.com/)

## Running the application locally

### Start the front-end server
(from the root folder)
```
cd client
npm start
```

### Start the back-end server
(from the root folder)
```
cd server
npm start
```

Go to http://localhost:3000/ on your local machine

## Description
The data for the application comes from two sources:
1. [Remote API](https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json)
2. Local Storage
<p>
Initially, application loads podcasts from the remote API.
User can drag and drop podcasts to save them on their local machine. They get saved in the local storage on the browser as a JSOn string element under the key "podcasts".
</p>
<p>
The state of the application is stored in podcastSlice.js with the help of the Redux library.
The pieces of state that we require to run the application are : "local" items, "remote" items, "current active" item, and "playing" state.
</p>
<p>
Podcast player consists of the following components:
Player: renders two lists, manages the saving functionality.
List: renders a list of podcasts.
Row: renders individual podcast, and invokes the correct podcast state based on user interaction with the interface. The component also detects, which podcast is currently active by monitoring the state with useEffect hook. If it is the one that is active, it plays the audio. Anytime that state changes, it responds to changes.
The row also contains the logic for what to do when the podcast ended. If the podcast is local, it plays the next podcast until the end of list is reached. If the podcast is remote, after it finishes playing, it does not invoke autoplay of the next podcast.
</p>






