# CV App
[React project from TOP's JS path](https://www.theodinproject.com/lessons/node-path-javascript-cv-application)

## Approach
This app has three major parts:
* App
 - Keeps track of all states neccessary
 - Defines functions to handle edits (edit / delete entries)
 - Logic

* View
 - Renders user info and entries 

* Form
 - Controls the values of user info and entries

## Design
The App's form inputs define what values are going to be displayed.
Users can input their personal information in a separate form. The second
form creates the experience entries. Since this is more or less only an MVP,
inputs have been limited. 
Users can edit and delete their entries. The `Edit Mode` displays the selected
entries' data as placeholders in the `experience form`. This way it's clear, what inputs are going to be changed. The `experience form` changes the `Add Entry` button
to a `Save` button. 
Each entry has its own `Delete` button. The button refers to the entry's index.