# PolyQuiz

PolyQuiz turns your notes into randomly generated quizzes. Explore the latest
quizzes made by other students & showcase your own quizzes in your profile.

It's a fullstack web application built with the MERN stack.

Try out the latest version of PolyQuiz:
https://polyquiz.onrender.com/

# Getting started

Run npm install in the backend folder to install everything from package.json.
```bash
npm install
```

Then to run the development server:
```bash
npm run dev
```

To create a new production build of the frontend and serve it from the backend as static files:
```bash
npm run build:ui
```

# Main features
* Create study sets - write down terms you've learnt in class & their definitions.
* Generate quiz - turn any study set into a random quiz.
* Explore - the latest study sets made by other students.
* Showcase - all study sets you make will be featured on your profile page.

# Tech stack
* React.js
* Redux Toolkit
* Material UI
* Express
* Node.js
* MongoDB
* Render



# Completed
* Hub page
* Profile page
* Bottom Nav Bar
* Redux global state
* Plays loading screen while fetching data
* Study set creator page
* Notification modal
* Publishing study sets
* Adding terms & definitions to study set
* Study set viewer
* Quiz page
* Pass id of study set to quiz page via route params 
* Quiz UI
* Reading form data from quiz & study set creator
* disabled text fields while viewing a study set
* Made quizzes random, wrote algorithm to shuffle questions & answers around
* Quiz results page
* REST API
* Functions for fetching data from API extracted into a separate file
* Google OAuth2.0 Login & take Google Account details by decoding JWT token from response & saving user info to redux global state
* Show user's Google profile picture in profile page & in their study sets
* AppBar showing logo, Google profile picture with animated badge & logout button
* Sort study sets by latest in Hub/Explore page
* Add login page photo
* Landing page
* Setup MongoDB database & shared cluster
* REST API communicates with MongoDB cluster
* Extracted MongoDB schema into its own file
* Backend now serves static files from frontend production build
* Custom hook for setting document titles
* form validation 
* deleting terms from study set
* deployed web service with render.com