import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
     <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
