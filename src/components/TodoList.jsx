import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  // Group todos by completion status
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div>
      {/* Active todos section */}
      <div className="mb-6">
        {activeTodos.length > 0 && (
          <h4 className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-3 ml-1">
            Active Tasks
          </h4>
        )}
        <div className="space-y-3">
          {activeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>

      {/* Completed todos section */}
      {completedTodos.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center mb-3">
            <h4 className="text-sm font-medium text-green-500 uppercase tracking-wider ml-1">
              Completed Tasks
            </h4>
            <div className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
              {completedTodos.length}
            </div>
          </div>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* If no todos at all */}
      {todos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No tasks yet. Add one to get started!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;