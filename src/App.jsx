import React, { useEffect, useState } from 'react';
import DarkModePage from './Pages/DarkMode';

const App = () => {

  const [theme, setTheme]= useState(true);
  
  useEffect(() => {
    if(localStorage.theme === 'dark' || (!(localStorage.theme) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[])
  

  return (
    <div>
      <DarkModePage setTheme={setTheme}/>
    </div>
  );
}

export default App;
