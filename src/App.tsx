import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

const App = () => {
  const [panel, setPanel] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar
        about={() => setPanel("about")}
        contact={() => setPanel("contact")}
        home={() => setPanel("")}
        darkMode={toggleDarkMode}
      />
      {panel === "about" && <About onClick={() => setPanel("")} />}
      {panel === "contact" && <Contact onClick={() => setPanel("")} />}
      <Home />
    </div>
  );
};
export default App;
