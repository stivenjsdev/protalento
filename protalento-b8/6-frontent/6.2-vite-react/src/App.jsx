import './App.css';
import { Counter } from './components/Counter';
import { Greeting } from './components/Greeting';

function App() {
  return (
    <div>
      <Counter />
      <Greeting name="Stiven" age={30} />
      <Greeting name="Alex" age={34} />
      <Greeting name="Johann" age={56} />
    </div>
  );
}

export default App;
