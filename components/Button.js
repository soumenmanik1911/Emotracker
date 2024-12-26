import React from 'react';

const Button = ({ text, dark, full, clickHandler }) => {
  return (
    <button onClick={clickHandler}
      className={
        `rounded-full px-6 py-2 text-lg font-medium duration-200 border-2 ` +
        `border-solid ` +
        (dark? ` bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-100 hover:opacity-80`
          : `bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-500`) + ( full ? ' grid place-items-center' : '')
      }
    >
      <p className={`tracking-wide px-5 sm:px-10 whitespace-nowrap`}>{text}</p>
    </button>
  );
};

export default Button;
