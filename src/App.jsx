import ThemeBtn from "./Components/ThemeBtn.jsx";
import Card from "./Components/Card.jsx";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [data, setData] = useState("");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    fetch(`https://api.github.com/users/hanumant-dombale`)
      .then((res) => res.json())
      .then(data => setData(data));
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, data, lightMode, darkMode }}>
      <div className="flex w-full min-h-screen items-center justify-center">
        <div className="w-4/5 mt-20">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full h-screen p-3">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
