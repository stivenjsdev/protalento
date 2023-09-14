export const Button = () => {
  let counter = 0;
  window.buttonHandleClick = (event) => {
    counter = counter + 1;
    event.target.innerHTML = `count is ${counter}`;
  };

  return `
      <button id="counter" type="button" onClick="buttonHandleClick(event)">
        count is ${counter}
      </button>
    `;
};
