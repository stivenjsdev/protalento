// // JSX
// const elementJSX = <p>soy un parrafo</p>;

// // Componente de React
// export function MyComponent(props) {
//   return elementJSX;
// }

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((count2) => count2 + 1)}>
      count is
      {' '}
      {count}
    </button>
  );
}
