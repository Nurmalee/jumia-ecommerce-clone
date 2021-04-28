import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './redux/reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
// import { AppState } from "./context"

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
)