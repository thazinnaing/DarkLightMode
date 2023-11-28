import React from 'react';

const Text = ({level, children}) => {
  return (
    <div className={`text-dark font-medium dark:text-light ${level === "2" && "text-pink dark:text-red"} ${level === "3" && "text-gold dark:text-pink"} ${level === "4" && "text-red dark:text-gold"} ${level === "5" && "text-green dark:text-orchid"}`} >
      {children}
    </div>
  );
}

export default Text;
