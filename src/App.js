import React from 'react';
import MainPage from './components/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <MainPage />
      </div>
    </Router>
  );
}

export default App;