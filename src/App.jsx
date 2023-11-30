import React from 'react';
import { ColorSchemeContextProvider } from './utils/ColorScheme';
import DarkModePage from './pages/DarkModePage';

const App = () => {
  return (
    <ColorSchemeContextProvider>
      <DarkModePage/>
    </ColorSchemeContextProvider>
  );
}

export default App;

