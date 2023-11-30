import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useColorScheme } from '../utils/ColorScheme';


const DarkModePage = () => {
  const {setTheme, isDark}= useColorScheme();

  const clickHandler=()=>{
    setTheme(isDark ? "light" : "dark")
  }


  return (
    <Container>
        <Box>
            <Text level="5">Light and Dark Mode</Text>
        </Box>
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
