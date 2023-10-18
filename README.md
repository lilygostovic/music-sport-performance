# Music Sport Performance

This project is intended to provide runners with a way to analyze their running performance in relation to the music they listen to while running.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture

### MVP
The Spotify and Strava APIs will be used to collect user data. Once the user has authorized the use of both APIs, the app will monitor the user's Strava activities and fetch every running activity the user completes using the Strava Webhook Events API. When a new running activity is uploaded, the app will fetch the user's recently played songs from the Spotify API. The app will then run various computations to calculate metrics of the music listened to while running such as: average beats per minute, most popular genres, average song length, percentage of explicit songs. These metrics will then be saved to the user's history of runs in the app. All runs and related music metrics will be able to be viewed on a homepage dashboard. 

### Next Steps
* Create graphs to visualize trends in the music metrics
* Extend to other sports in addition to running

### Notes
The Spotify API does not provide a way to access full history of music listened to, it is limited to the last 50 songs a user has played. It is for this reason that analysis can only be done on activities completed after the user has authenticated the app. 
The Spotify API's endpoint to get recently played tracks currently does not support podcasts therefore neither will this application. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
