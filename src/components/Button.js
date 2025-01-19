import React from 'react';

function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
