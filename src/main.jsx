
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { App } from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className="container container-fluid m-1 p-1">
      <App />
    </div>
  </>,
)