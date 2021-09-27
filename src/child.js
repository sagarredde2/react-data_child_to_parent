import React from 'react';

const Child = (props) => {
  return (
    <>
      <h1> {props.func('sagar')}</h1>
    </>
  );
};

export default Child;
