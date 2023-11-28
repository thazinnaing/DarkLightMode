import React, { useContext } from 'react';
import { isDark, toggleTheme } from '../utils/colorScheme';
import Box from '../components/BoxOne';
import BoxTwo from '../components/BoxTwo';
import Text from '../components/Text';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkModePage = ({setTheme}) => {

  const clickHandler=()=>{
    toggleTheme();
    setTheme(current=>!current);

  }

  return (
    <Box>
        <BoxTwo>
            <Text level="5">Light and Dark Mode</Text>
        </BoxTwo>
        <Text>I am Light mode.</Text>
        <Text level="2">I am Dark mode.</Text>
        <Text level="3">Which one am I?</Text>
        <Text level="4">Please let me know.</Text>
        <div className="flex gap-3">
            <div onClick={clickHandler} className="w-5 h-5 text-dark dark:text-light">
            {
              isDark() ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
            }
            </div>     
            <Text>{isDark() ? "Darkmode" : "Lightmode"}</Text>
        </div>
       
    </Box>
    
  );
}

export default DarkModePage;
