import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/authProvider"
import App from './App';


ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));

