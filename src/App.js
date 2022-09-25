import { useDarkMode, ThemeContext } from "./hooks/useDarkMode";

function App({ children }) {
  const [dark, setDark] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default App;
