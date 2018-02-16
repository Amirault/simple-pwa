# SimplePwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## RUN PWA

- Install dependencies `npm install`
- Run `ng build --prod` 
- Go to `/dist` folder
- Serve generated content using `http-server -p 8080` (need to be installed using npm install http-server) 
 -Navigate to `http://localhost:8080`

## PWA FEATURE AVAILABLE

- `Add to homescreen` like a native application : 
This feature is powered by the `manifest.json` inside the app.
- `offline mode` : 
This feature is powered by service worker technology configured in `ngsw-config` inside the app.
