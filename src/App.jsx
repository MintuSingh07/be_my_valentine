// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Message from './components/Message';
import Result from './components/Result';
import Home from './components/Home';

const App = () => {
  const [message, setMessage] = useState({ name: '', content: '' });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/message" element={<Message setMessage={setMessage} />} />
        <Route path="/result" element={<Result name={message.name} content={message.content} />} />
      </Routes>
    </Router>
  );
};

export default App;
