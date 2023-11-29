export const toggleTheme=()=>{
  const {isDark}=useColorScheme();
    if (isDark){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    }
  }

  export const useColorScheme= ()=>{
    const isDark= localStorage.getItem("theme") === "dark";
    return {isDark};
  }