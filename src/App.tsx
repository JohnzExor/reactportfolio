import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

const App = () => {
  let [aboutVisibility, showAboutVisibility] = useState(false);
  let toggleAbout = () => showAboutVisibility(!aboutVisibility);

  let [contactVisibility, showContactVisibility] = useState(false);
  let toggleContact = () => showContactVisibility(!contactVisibility);
  return (
    <div>
      <NavBar about={toggleAbout} contact={toggleContact} />
      {aboutVisibility && <About onClick={toggleAbout} />}
      {contactVisibility && <Contact onClick={toggleContact} />}
      <Home />
    </div>
  );
};
export default App;
