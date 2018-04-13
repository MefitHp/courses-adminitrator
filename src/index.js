import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css';
import { BrowserRouter as Router } from 'react-router-dom'

const store = configureStore();

const WithRouter = () => (
    <Router>
        <App />
    </Router>
);

const StateFull = () =>(
    <Provider store={store}>
        <WithRouter />
    </Provider>
);

ReactDOM.render( <StateFull />,document.getElementById('root'));