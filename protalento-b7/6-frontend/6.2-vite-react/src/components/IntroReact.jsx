import React from 'react';

// JSX
const name = 'Brayan';
export const element = (
  <p>
    Hola,
    {' '}
    {name}
  </p>
);

export const element2 = React.createElement('p', null, `Hola ${name}`);
