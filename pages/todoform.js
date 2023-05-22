import { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [todoId, setTodoId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new todo
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title, completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log("This data: ",data);

    // Set the todo ID
    setTodoId(data.id);
  };

  return (
      <div className="flex items-center justify-center h-screen">
  <div className="bg-white shadow-lg rounded-lg p-8">
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="completed"
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
        </div>
        <label htmlFor="completed" className="ml-2 text-sm font-medium text-gray-900">Completed</label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
    {todoId && <p>Created Todo with ID: {todoId}</p>}
  </div>
</div>
  );
}

export default TodoForm;
