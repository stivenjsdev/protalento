export function TodoList() {
  return (
    <>
      <h1>Task List</h1>

      <input type="text" placeholder="type your task here..." />

      <button type="button">add task</button>

      <ul>
        <li>
          Item 1
          <button type="button">Delete</button>
        </li>
        <li>
          Item 2
          <button type="button">Delete</button>
        </li>
        <li>
          Item 3
          <button type="button">Delete</button>
        </li>
      </ul>
    </>
  );
}
