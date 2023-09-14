import "./styles/style.css";
import javascriptLogo from "./assets/images/javascript.svg";
import viteLogo from "/vite.svg";
import { Title } from "./components/Title.js";
import { Paragraph } from "./components/Paragraph.js";
import { Card } from "./components/Card.js";
import { Button } from "./components/Button.js";

const App = () => {
  return `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      ${Title({ title: "Buenos dias" })}
      ${Title({ title: "Buenos noches" })}

      ${Card({ children: Button() })}

      ${Paragraph({ text: "Hasta luego" })}
    </div>
  `;
};

document.querySelector("#app").innerHTML = App();
