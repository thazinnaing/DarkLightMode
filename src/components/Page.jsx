import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Page = () => {

    const {theme, toggleTheme}=useContext(ThemeContext);
    console.log("page theme", theme)

  return (
    <div class="flex flex-col gap-5">
        <div class={`${theme === "light" ? "font-bold rounded-lg p-5 bg-dark text-light " : "font-bold p-5 rounded-lg bg-light text-dark"}`} >
            Light and Dark Mode
        </div>
        <div class="flex gap-3">
            <input class="w-5 h-5" type="checkbox" onClick={toggleTheme} />
            <p class={theme === "light" ? "text-dark" : "text-light"}>Darkmode</p>
        </div>

    </div>
    
  );
}

export default Page;
