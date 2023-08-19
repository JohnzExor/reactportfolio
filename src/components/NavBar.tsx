interface Props {
  home: () => void;
  about: () => void;
  contact: () => void;
  darkMode: () => void;
}

const NavBar = ({ home, about, contact, darkMode }: Props) => {
  return (
    <div className="shadow-xl fixed w-full bg-gray-300 dark:bg-zinc-800 dark:text-white">
      <div className="flex gap-4 justify-center p-4">
        <strong>PORTFOLIO</strong>
        <ul className="flex gap-4">
          <li>
            <a className="nav-link" onClick={home}>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={about}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={contact}>
              Contact
            </a>
          </li>
          <li>
            <a className="nav-link" onClick={darkMode}>
              D/L
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
