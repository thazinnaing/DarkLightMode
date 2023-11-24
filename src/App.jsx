import React, { createContext } from 'react';
import Page from './components/Page';
import { useState } from 'react';

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme]=useState("light");

  console.log("theme", theme)

  const toggleTheme=()=>{
    setTheme(current => current === "light" ? "dark" : "light");
  }
  

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

      <div class={` w-full h-screen flex flex-col justify-center items-center bg-${theme}`} >
        <Page/>
      </div>

    </ThemeContext.Provider>
    
  );
}

export default App;
