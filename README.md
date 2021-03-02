![alt_text](https://www.onramp.io/assets/onramp-blue.svg "Onramp Logo")

# Onramp Pandora Take-Home Project
## Basic Podcast Display and Playback 🎙

### Objective

Build a single page app (SPA) that loads a set of podcasts, displays them and plays them.

The SPA will load a remote source of data and save it locally on a redux store.

The redux data will be used to render the display.

The end result should look something like this:

![alt_text](/assets/podcast-app.png "Podcast App")

On the left side is a list of available podcasts retrieved from the remote source.

On the right side is a persistent list of podcasts selected from the right side.

The list on the left side reloads every time the app is loaded.

The list on the right side persists locally and does not change between reloads.

The focus of the exercise is developing the described functionality and afterwards focus on polish. We encourage you to follow the iterative approach of “Make it work. Make it right. Make it fast”

## Pre-Requisites ✔️

- Git and a GitHub repository
- Node and NPM
- React
- Redux

### Setting up your project

Please create a project on [GitHub](https://github.com/) and use git to track development progress.

To setup your project please use the Create React App toolchain.

This exercise is not prescriptive as to what libraries and tools to use except as noted above. Please use your best judgment.

### Remote Data

The remote data is hosted in [GitHub](https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json) .

The remote data consists of a JSON structure listing 14 podcasts publicly available.

Your application on load will retrieve the data and store it in a Redux store.

The data in the Redux store will be available to render any user interface details.

### User Interface

The user interface consists of a few simple elements described below.

The included images are demonstrative only. There are no prescriptive sources for icons so feel free to use public domain, open source icons such as [icons8](https://www.google.com/url?q=https://icons8.com/icon/pack/media-controls/wired&sa=D&source=editors&ust=1613253218899000&usg=AOvVaw1Lbj2LFlX464K86uMKie25).

##### Row

![alt_text](/assets/row.png "row example")
A row displays an image, a title, a description and a play/pause button.


Each of the items on the remote data is represented visually by a row.


##### List

![alt_text](/assets/list.png "list example")
A list consists of a scrollable list of rows.


All of the podcasts listed on the remote data should be displayed within a list.

##### Play / Pause Button

![alt_text](/assets/play-pause.png "play pause icon example")
A play/pause button is a button with one of two states, play or pause.


Each podcast row starts in a paused state, so the “play” button is visible.


On pressing “play” the podcast should start playing and the button change to “pause”.

##### Interactions

###### Left List


The left list consists of all podcast items from the remote data feed.


Whenever the app is refreshed, the list should be retrieved and the list populated.

###### Right List
The right list consists of all podcast items the user decided to save.


To save a podcast, a podcast row can be dragged from the left list and dropped onto the right list.


The right list can also be reordered by dragging and dropping rows.


The contents of the right list do not change between reloads.


The user can drag podcasts from the left list to the right list.


The user can remove podcasts from the right list by dragging and dropping them off the list.


###### Playback

Pressing on the “play” button on any of the rows on any list should start playback and change the button to a “pause” state.


Pressing on a “play” button while a different podcast is playing should pause the playback in progress and start the new one.


Playback on the left list is limited to the podcast that is being currently played. Once the podcast finishes then playback stops and the button for the row is restored to its “play” state.


Playback on the right list works like a playlist. Once the current podcast playing from the right list is completed then the next podcast on the list plays.


Once the last podcast on the right list finishes playing then playback stops and the button for the row is restored to its “play” state.

### Deliverables

Once the project is completed the expectation is that the apprentice will submit:


1. A GitHub project that can be checked out, reviewed and ran with a one command.
2. A README.md writeup in your project. Feel free to use the following [README template](https://github.com/kylelobo/The-Documentation-Compendium/blob/master/en/README_TEMPLATES/Standard.md). At a minimum it should cover the following topics:
      a. Library and tooling choices.
      b. Description of SPA architecture and data flow.

Once complete, please fill out the project submission form:
[Take-Home Project Submission](https://docs.google.com/forms/d/e/1FAIpQLSeyphOplL7AJdED7pT-vt5yeQfqpTbyrzXHIrLHViWaZ9yd4Q/viewform)

### Notes
<table class="c16"><tbody><tr><th>Task</th><th>Estimated time</th></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_7odevik36efb-0 start"><span class="c4">Create project</span></ul><ul class="c5 lst-kix_7odevik36efb-1 start"><li class="c12 c6 li-bullet-0"><span class="c4">Initialize react app</span></li></ul><ul class="c5 lst-kix_7odevik36efb-0"><li class="c7 li-bullet-0"><span class="c4">Initialize git workspace</span></li><li class="c7 li-bullet-0"><span class="c4">Prepare remote github project</span></li></ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">1.5hr</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_9qjllioedw3t-0 start">Create a redux store to represent data</ul><ul class="c5 lst-kix_9qjllioedw3t-1 start"><li class="c6 c12 li-bullet-0"><span class="c4">two lists. one remote another local</span></li></ul><p class="c3 c17"><span class="c4"></span></p></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">1.5hr</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_zfic4he9px8n-0 start">Load data from source into redux store</ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">2hrs</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_tk9397cf6b8b-0 start">Create the basic UI</ul><ul class="c5 lst-kix_tk9397cf6b8b-1 start"><li class="c12 c6 li-bullet-0"><span class="c4">Create a list component</span></li><li class="c12 c6 li-bullet-0"><span class="c4">Create a row component</span></li><li class="c12 c6 li-bullet-0"><span class="c4">Create play/pause button</span></li></ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">3hrs</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_juysxg4pu7np-0 start">Wire the UI and the redux store</ul><ul class="c5 lst-kix_juysxg4pu7np-1 start"><li class="c2 c6 li-bullet-0"><span class="c4">store changes, the UI updates</span></li><li class="c2 c6 li-bullet-0"><span class="c4">UI changes. Actions trigger. Store updates</span></li></ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">2hrs</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_4q68hkr16u0e-0 start">Drag and drop functionality</ul><ul class="c5 lst-kix_4q68hkr16u0e-1 start"><li class="c2 c6 li-bullet-0"><span class="c4">DnD from left list to right list triggers “add”</span></li><li class="c2 c6 li-bullet-0"><span class="c4">DnD from right list to anywhere triggers “remove”</span></li></ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">2hrs</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_gvielqcdnia5-0 start">Play/Pause button</ul><ul class="c5 lst-kix_gvielqcdnia5-1 start"><li class="c2 c6 li-bullet-0"><span class="c4">Triggers action for audio tag source update.</span></li></ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">3hrs</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><ul class="c5 lst-kix_hsewd36pjuq0-0 start">Fit &amp; Finish</ul></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">Open ended</span></p></td></tr><tr class="c14"><td class="c8" colspan="1" rowspan="1"><p class="c2 c3 c18"><span class="c4"></span></p></td><td class="c8" colspan="1" rowspan="1"><p class="c17"><span class="c4">~15hrs</span></p></td></tr></tbody></table>