import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyForm from './components/Form/MyForm';
import NotFound from './components/404';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

