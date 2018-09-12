# Overview

A Look at PEI Open data. I have created a simple portal as a reference for all things education. The portal looks at School Capacity, Locations, Test Scores and other areas that influence education.

Some of the Data comes from the open portal, some is sourced from various websites.

# Tech

React 16+ w/ Material UI

# Usage

Create a .env(.production || local) file containing the following keys
`REACT_APP_GOOGLE_MAPS_API_KEY` - Google Maps API Key. See documentation for Google maps to get a key
`REACT_APP_DATA_URL_ATTENDANCE` - Link to the open data portal dataset for attendance
`REACT_APP_DATA_URL_GIS` - Link to the GIS locations from the open data portal

Run the server `npm start` or create a build `npm build`
