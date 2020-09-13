import React from 'react';
import AdminPanel from './Components/AdminPanel';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AdminPanel />
    </Router>
  );
}

export default App;
