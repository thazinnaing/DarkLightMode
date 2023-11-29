import React, { createContext, useEffect, useState } from 'react';
import DarkModePage from './pages/DarkModePage';

export const themeContext=createContext(null);

const App = () => {
  const [theme, setTheme]= useState(false);
  
  const themeSetter=()=>{
    setTheme(current=>!current);
  }
  
  useEffect(() => {
    if(localStorage.getItem("theme") === 'dark' || (!(localStorage.getItem("theme")) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      themeSetter();
    }else {
      document.documentElement.classList.remove('dark');
    }
  },[])
  

  return (
    <themeContext.Provider value={{theme, themeSetter}}>
      <DarkModePage/>
    </themeContext.Provider>
    
  );
}

export default App;
