import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Page = () => {

    const {theme, toggleTheme}=useContext(ThemeContext);
    console.log("page theme", theme)

  return (
    <div class="flex flex-col gap-5">
        <div class="font-bold p-5 rounded-lg shadow-sm shadow-dark">
            Light and Dark Mode
        </div>
        <div class="flex gap-3">
            <input class="w-5 h-5" type="checkbox" onClick={toggleTheme} />
            <p class={theme === "light" ? `` :``}>Darkmode</p>
        </div>

    </div>
    
  );
}

export default Page;
