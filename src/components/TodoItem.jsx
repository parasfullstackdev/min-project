import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div 
      className={`flex justify-between items-center p-5 my-3 bg-white rounded-xl shadow transition-all duration-300 hover:shadow-md
      ${todo.completed ? 'bg-indigo-50' : ''} border-l-4 ${todo.completed ? 'border-green-400' : 'border-indigo-400'}`}
    >
      <div className="flex items-center flex-grow mr-4">
        <div 
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center cursor-pointer
          ${todo.completed ? 'bg-green-400' : 'border-2 border-indigo-300'}`}
        >
          {todo.completed && (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-2 border border-indigo-200 rounded-lg text-base focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
            autoFocus
          />
        ) : (
          <span
            onClick={() => onToggle(todo.id)}
            className={`flex-grow cursor-pointer text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
          >
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className={`px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium
          ${isEditing 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'}`}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all duration-200 text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;