import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {Storeconfigure} from './app/redux.js'
createRoot(document.getElementById('root')).render(
  <Provider store={Storeconfigure}>
    <App />
  </Provider>
)
