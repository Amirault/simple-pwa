# SimplePwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## RUN PWA

- Install dependencies `npm install`
- Run `ng build --prod` 
- Go to `/dist` folder
- Serve generated content using `http-server -p 8080` (need to be installed using npm install http-server) 
 -Navigate to `http://localhost:8080`

## PWA FEATURES AVAILABLE

- `Add to homescreen` : Allow the user to have the app on the home screen like a native app.
  - iOS users : invitation to add manually the app to home screen.
  - other users : waiting navigator installation message then cancel-it and customize-it.
  - Powered by : `manifest.json`.

- `Offline mode` : Allow the user to use the app offline.
  - When offline only the cached files and data are available.
  - Powered by : `ngsw-config` (service worker configuration file).
- `App update` : Allow the user to have an updated app.
  - When an update is detected then the service worker make-it available for the next time (refresh)
  - Powered by : natively service worker.
- `App update notification` :
  - When an update is available during user navigation the user is invited to update the app to the new version.
If the user decline the update will be available on the next refresh.
  - Powered by : service worker update events.
