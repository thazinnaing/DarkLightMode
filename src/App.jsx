import React, { useEffect } from 'react';
import DarkModePage from './pages/DarkModePage';

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
      <DarkModePage/>
    </div>
  );
}

export default App;
