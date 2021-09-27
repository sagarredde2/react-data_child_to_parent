import React from 'react';
import './style.css';
import Child from './child';

export default function App() {
  const pullData = (data) => {
    return data;
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child func={pullData} />
    </div>
  );
}
