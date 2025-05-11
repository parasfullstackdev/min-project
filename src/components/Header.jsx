import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-6 shadow-lg w-full">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-indigo-200">My</span> Task Manager
        </h1>
        <p className="text-center text-indigo-200 mt-1 text-sm font-light">Organize your day, accomplish more</p>
      </div>
    </header>
  );
};

export default Header;