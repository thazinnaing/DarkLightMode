import React from 'react';

const BoxTwo = ({children}) => {
  return (
    <div className="p-6 rounded-lg border-2 font-medium border-dark dark:border-light text-dark dark:text-light">
        {children}
    </div>
  );
}

export default BoxTwo;
