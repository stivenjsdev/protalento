const Button = () => {
  let counter = 0;
  window.buttonHandleClick = (event) => {
    counter += 1;
    const buttonEvent = event;
    buttonEvent.target.innerHTML = `count is ${counter}`;
  };

  return `
    <button id="counter" type="button" onClick="buttonHandleClick(event)">
      count is ${counter}
    </button>
  `;
};

export default Button;
