import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { BrowserRouter as Router } from 'react-router-dom'

const WithRouter = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(<WithRouter /> , document.getElementById('root'));