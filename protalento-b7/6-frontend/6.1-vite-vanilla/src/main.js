import javascriptLogo from './assets/images/javascript.svg';
import Button from './components/Button';
import Card from './components/Card';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import './styles/style.css';
import viteLogo from '/vite.svg';

const App = () => `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    ${Title({ title: 'Buenos dias' })}
    ${Title({ title: 'Buenos noches' })}

    ${Card({ children: Button() })}

    ${Paragraph({ text: 'Hasta luego' })}
  </div>
`;

document.querySelector('#app').innerHTML = App();
