const NavBar = () => {
  return (
    <div className="bg-black text-white shadow-lg fixed w-full">
      <div className="flex gap-4 justify-center p-4">
        <strong>PORTFOLIO</strong>
        <ul className="flex gap-4">
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
