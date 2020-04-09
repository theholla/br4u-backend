# Shift2Bikes Ride Map

This web app pings the Shift2Bikes calendar API and displays bike rides on an interactive map. Users can apply filters to find rides that are relevant to them.

## Current UI

![screen capture of app](/screencap.png)

## MVP

Complete:

- [x] Fetch bike fun data from Shift2Bikes API
- [x] Center map on lat/long from user's geo-location
- [x] Display rides in list and on map (poc: use random location data)
- [x] Add ride filters: start date, end date, day of week
- [x] Implement blank state, loaders, and cancelled event behavior
- [x] Separate concerns of frontend and backend

TODO:

- [~] Fire map marker click when user clicks on ride in list
- [] Display actual ride locations on map (need to implement backend for location service)
- [] Cache response from Shift2Bikes API based on "start" query param

## Cool ideas for later

1. Add button: report a problem
1. Add toggle: sort by distance vs date
1. Add filters to controls: organizer, audience, location name, area (PDX/Vancouver), duration, time of day
1. Add filter to map: expandable radius
1. Add link to original event on shift2bikes.org
1. Make center of map draggable; currently defaults to user location if allowed
1. Improve mobile-friendliness
1. Allow users to export filtered rides and/or individual ride in .ics format
1. Display weather icon next to ride for expected weather

## Local development

```bash
npm i
npm start
```

App will be visible on http://localhost:3000/

### Live Data

The local app reads test data from a file by default because I don't want to be a jerk and overload Shift's servers with all my refreshing. To enable live data, set `REACT_APP_USE_LIVE_DATA` in the `.env` file to `true` and restart the app.

## About Shift2Bikes

This web app is not affiliated with Shift2Bikes.org. But I do think they're awesome!

Shift's mission is to promote inclusive bike fun. Shift also facilitates lots of events. Examples of Shift-related activities include breakfast give aways, social rides, educational bike tours, actions to raise awareness about cyclist injuries or deaths, information-sharing events, art-bike parades and more.

See [Shift2Bikes.org](https://www.shift2bikes.org/) for more information about bike fun in Portland.
