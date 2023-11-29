export const toggleTheme=()=>{
    if (isDark){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
      
    }else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    }
  }

  export const isDark = (localStorage.theme === 'dark');