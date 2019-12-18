// .storybook/config.js

import { configure } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css'
import '../src/containers/App.css'

const req = require.context('../src', true, /\.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
