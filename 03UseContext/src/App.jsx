import { useEffect } from "react";
import { useState } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const darkTheme = () => {
    setCurrentTheme("dark");
  };
  const lightTheme = () => {
    setCurrentTheme("light");
  };

  useEffect(() => {
    const page = document.querySelector("html");
    page.classList.remove("light", "dark");
    page.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProvider value={{ currentTheme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
