NodeJS Socket.io realtime anonymous voting application
==========================================================

This is a prototype realtime anonymous voting application which is written using nodejs and its socket.io package. This will 
be extended to have a mysql database connection.

Requirements
------------

1. Node.js
2. Socket.io
3. express JS
4. Hjs for page rendering
5. mysql package (this part is currently not commented and subjected to extend)

Using it...
-----------

1. Clone the repo locally
2. cd into the cloned directory and run `npm install` to install the dependancies (includes mysql but never used :-) )
3. Visit http://localhost:3000 and got to "Event perception" link in one browser window (Page A)
4. Open another window and visit http://localhost:8000/ and go to "Event Perception graph" link(Page B)
5. Note that the initial dataset for the graph has been mocked
6. You can see the graph shows the average rating as you vote!


Contact...
-----------
sachintha.rajith@gmail.com