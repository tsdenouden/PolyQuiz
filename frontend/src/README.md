frontend built with React, Redux & MaterialUI

folder structure:

* Index.js - renders react app. sets up browser router, redux provider & MUI theme
* App.js - routes for / and /home/*
* theme.js - MUI theme

#### pages
* landing.js - landing page, didn't do anything here yet
* login.js - sign up/in page. After signing in, redirects user to /load (load.js) to fetch study terms.
* load.js - Fetches latest study terms in the background while playing a loading screen. Redirects user to home/hub afterwards.
* home.js - routes for hub, profile & study pages with a navigation bar to travel between those pages.
* hub.js (home/hub) - this is the timeline/media page showing the latest or trending study sets.
* study.js (home/study) - study set viewer & editor page.
* quiz.js (home/quiz) - quiz game page
* profile.js (home/profile) - user profile with basic account details & showcase of user's study sets.

#### redux
* store.js - redux store
* sets.js - slice for study sets
* user.js - slice for user account info

#### components
* redirect.js - redirect user to landing page
* studySets.js - renders an array of study sets as a list of card components