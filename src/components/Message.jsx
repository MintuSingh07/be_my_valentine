// Message.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Message = ({ setMessage }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'content') {
      setContent(e.target.value);
    }
  };

  // Whenever there's a change in name or content, call the setMessage function
  // provided via props to update the message data
  const updateMessage = () => {
    setMessage({ name, content });
  };

  return (
    <div>
      <input type="text" name='name' value={name} onChange={handleInputChange} />
      <input type="text" name='content' value={content} onChange={handleInputChange} />
      <Link to="/result" onClick={updateMessage}>See Result</Link>
    </div>
  );
};

export default Message;
