import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <Header />
      
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="w-full max-w-2xl py-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
              Task Manager
            </h2>
            
            <form onSubmit={addTodo} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="What needs to be done?"
                  className="w-full p-4 pr-32 text-lg border-2 border-indigo-100 rounded-xl
                          focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                          transition-all duration-200"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 px-6 py-2 bg-indigo-600 text-white
                          font-semibold rounded-lg hover:bg-indigo-700 transition-all
                          duration-200 transform hover:scale-105 active:scale-95 shadow-md"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-xl">
            {todos.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-20 h-20 mx-auto text-indigo-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 11-2 0V7zm1-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-xl text-gray-500 font-medium mt-4">
                  Your task list is empty
                </p>
                <p className="text-gray-400 mt-2">
                  Add your first task using the input above
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-indigo-700">
                    Your Tasks
                  </h3>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
                  </span>
                </div>
                <TodoList
                  todos={todos}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;