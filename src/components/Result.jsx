// Result.jsx
import React from 'react';

const Result = ({ name, content }) => {
  return (
    <div>
      <h1>Result</h1>
      <p>Name: {name}</p>
      <p>Message: {content}</p>
    </div>
  );
};

export default Result;
