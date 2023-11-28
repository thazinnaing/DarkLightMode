import React, { useContext } from 'react';
import { isDark, toggleTheme } from '../utils/colorScheme';
import Box from '../components/BoxOne';
import BoxTwo from '../components/BoxTwo';
import Text from '../components/Text';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page = () => {
  console.log("darklight", isDark())

  return (
    <Box>
        <BoxTwo>
            Light and Dark Mode
        </BoxTwo>
        <div className="flex gap-3">
            {/* <input className="w-5 h-5" type="checkbox" onClick={toggleTheme} /> */}
            <div onClick={toggleTheme}>
            {
              isDark() ? <FontAwesomeIcon className="w-5 h-5 mt-1 text-light" icon={faMoon} /> : <FontAwesomeIcon className="w-5 h-5 mt-1 text-dark" icon={faSun} />
            }

            </div>     
            <Text>{isDark() ? "Darkmode" : "Lightmode"}</Text>
        </div>
       
    </Box>
    
  );
}

export default Page;
