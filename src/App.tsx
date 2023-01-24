import React from 'react';
import { useLocalStorage } from 'usehooks-ts'
import './App.css';

function App() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);
  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue)
  }
  return (
    <div className="App">
      <button onClick={toggleTheme}>
      {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
    </button>
    </div>
  );
}

export default App;
