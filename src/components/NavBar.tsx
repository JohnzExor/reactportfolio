const NavBar = () => {
  return (
    <div className=" dark:bg-cyan-950 text-white w-full fixed">
      <div className="flex gap-3 justify-center p-4">
        <strong>PORTFOLIO</strong>
        <ul className="gap-3 flex">
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
