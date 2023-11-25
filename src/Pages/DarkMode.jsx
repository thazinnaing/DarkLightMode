import React, { useContext } from 'react';
import { isDark, toggleTheme } from '../utils/colorScheme';
import Box from '../components/BoxOne';
import BoxTwo from '../components/BoxTwo';
import Text from '../components/Text';

const Page = () => {

  return (
    <Box>
        <BoxTwo>
            Light and Dark Mode
        </BoxTwo>
        <div className="flex gap-3">
            <input className="w-5 h-5" type="checkbox" onClick={toggleTheme} />
            <Text>Darkmode</Text>
        </div>
       

    </Box>
    
  );
}

export default Page;
