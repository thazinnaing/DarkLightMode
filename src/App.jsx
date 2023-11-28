import React, { useEffect, useState } from 'react';
import Page from './Pages/DarkMode';

const App = () => {
  
  useEffect(() => {
    if(localStorage.theme === 'dark' || (!(localStorage.theme) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[])
  

  return (
    <div>
      <Page/>
    </div>
  );
}

export default App;
