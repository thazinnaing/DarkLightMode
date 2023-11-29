import React, { useCallback } from 'react';
import { isDark, toggleTheme } from '../utils/colorScheme';
import Container from '../components/Container';
import BoxTwo from '../components/BoxTwo';
import Text from '../components/Text';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkModePage = () => {
  console.log("dark", isDark)

  const clickHandler=(useCallback(toggleTheme));
  return (
    <Container>
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
              isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
            }
            </div>     
            <Text>{isDark ? "Darkmode" : "Lightmode"}</Text>
        </div>
       
    </Container>
    
  );
}

export default DarkModePage;
