import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
