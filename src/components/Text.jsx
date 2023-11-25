import React from 'react';

const Text = ({children}) => {
  return (
    <div className='text-dark dark:text-light'>
      {children}
    </div>
  );
}

export default Text;
