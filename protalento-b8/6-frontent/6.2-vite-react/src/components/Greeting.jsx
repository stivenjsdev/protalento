import './Greeting.css';

export function Greeting({ age, name }) {
  return (
    <>
      <p className="greeting">
        Hola Ingeniero
        {' '}
        {name}
        {' '}
        con
        {' '}
        {age}
        {' '}
        años.
      </p>
      <h2>Gracias por asistir.</h2>
    </>
  );
}
