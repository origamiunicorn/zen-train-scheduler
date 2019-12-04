# Zen Train Scheduler
THe objective here was creating a train schedule application incorporating Firebase to host arrival and departure data. With the use of Monent.js as well as Firebase, a site visitor is able to add new trains to the listing and observe when they're next due to arrive, as well as the minutes until that arrival. This is all part of a homework assignment for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to March 2020). 

A user can view the trains already input by themselves or other users and stored on a Firebase database. Users are then able to use the form at the bottom of the page to add a new train line to the table tracking arrivals. 

Firebase is keeping track of each new train as its own ref, so that the list of trains on table will show all trains currently stored in the database. Each time a new train is added, the table updates from the database. Each time the page is reloaded, all times update.

## Languages Used
* CSS3
* HTML5
* JavaScript

## Libraries Used
* jQuery
* Bootstrap
* Moment.js

## Other Technologies Used
* Firebase, both for database and hosting purposes.

## Features
The use of Bootcamp for structure, Bootcamp's breakpoint responsive table for side scrolling on small screens, thse use of .gitignore on GitHub to not upload the API for this (the uploaded copy of JS here is without the API key), and Firebase for storing information and updating it.

## Future Development
A few stretch goals for the future include:
* Refresh button or timed interval for refresh of arrivals/minutes to arrival.
* Edit and Delete buttons for individual trainlines.
* Authentication for users so that those with pre-existing accounts with Google are the ones allowed to add/remove/edit individual train lines.
* Get form to authenticate time entry so no inappropriate values may be input for time of First Train.