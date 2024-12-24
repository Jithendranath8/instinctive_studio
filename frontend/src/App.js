import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentsPage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
