# M:tG Card Viewer

### Tech:

- React (via create-react-app (see below for more info))
- Redux
- Jest
- Storybook
- Bootstrap (limited use)

### Known bugs:

- Searching breaks loading on scroll
- The card count at the bottom counts placeholders, throwing off the count before any cards have loaded
- Initiating a search or sort while there's an API call happening can result in incosistent results in the card list. I hopefully mitigated this by the disabling of those controls during loading
- Bad UI experience when search and sort popovers are both displayed
- In full screen on the browser the paged list will collapse if there are less than enough rows to fill the space.

### TODOS (to include, but not limited to, see code for more):

- Tighten up the search box UI
- Add more searchable fields
- add more sortable fields
- Add loading indicator to the bottom of the card list
- Some media queries to make the layout nicer on smaller displays
- More unit tests
- Implement reverse sort order by calculating how many pages are available and then requesting them in reverse order, while sorting the pages in reverse order manually

### Thoughts

- Bootstrap/reactstrap was an 11th hour addition. This would have been much smoother if I had started there instead of doing all the component work myself
- Storybook is pretty cool. This is my first time using it and I was dissapointed to learn halfway through that there's no easy way to get it to manage internal component state. That's not great for my app, since I'm using a decent amount of internal state. If I were going to use it again, I'd probably leverage Redux stores for all state and setup containers for each component so that Storybook can get access to everything it needs.
- Most of my unit testing went into my debounce function, that ended up not being used. I am leaving it in for posterity.

### Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
