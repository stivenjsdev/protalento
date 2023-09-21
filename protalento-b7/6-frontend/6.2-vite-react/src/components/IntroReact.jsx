import PropTypes from 'prop-types';
import React from 'react';
import './IntroReact.css';

// JSX
const myname = 'Brayan';
export const element = (
  <p>
    Hola,
    {' '}
    {myname}
  </p>
);

export const element2 = React.createElement('p', null, `Hola ${myname}`);
// syntax
// React.createElement('type', [props], [...children])

// COMPONENTS
// componentes funcionales

export function MyComponent({ name, lastName }) {
  // cuerpo de la funcion
  return (
    <div>
      Hola,
      {' '}
      {name.toUpperCase()}
      {' '}
      {lastName.toUpperCase()}
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

MyComponent.defaultProps = {
  name: 'Stranger',
  lastName: 'Perez',
};

// Fragments
export function ProfileCard({ name, age }) {
  return (
    <>
      <h1 className="title">
        Bienvenido
        {' '}
        {name}
      </h1>
      <p className="paragraph">
        Reconocido Ingeniero de Software de tan solo
        {' '}
        {age}
        {' '}
        años
      </p>
    </>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

ProfileCard.defaultProps = {
  name: 'unknown',
  age: 0,
};
