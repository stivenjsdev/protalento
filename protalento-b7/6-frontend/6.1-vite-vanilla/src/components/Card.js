export const Card = ({ children }) => {
  // prop especial llamada children
  return `
      <div class="card">
        ${children}
      </div>
    `;
};
