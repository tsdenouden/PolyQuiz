frontend built with React & MaterialUI

folder structure:

## src
* Index.js - renders react app, sets up browser router, redux provider & MUI theme
* App.js - routes for / and /home/* 
* theme.js - MUI theme

### pages
* landing.js - landing page with sign up form. Redirects user to home/hub after signing up/logging in.
* home - routes for hub, profile & study pages with a navigation bar to travel between those pages.
* hub (home/hub) - this is the timeline/media page showing the latest or trending study sets.
* study (home/study) - study set creation/editor page.
* profile (home/profile) - user profile with basic account details & showcase of user's study sets.

### redux
* configured store & some redux reducers