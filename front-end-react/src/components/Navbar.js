import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
      <div className = "container-fluid">

        <navlink className = "navbar-brand"> Lexical Analysis Toolkit </navlink>
        <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
          <span className = "navbar-toggler-icon"></span>
        </button>

        <div className = "collapse navbar-collapse" id = "navbarNav">
          <ul className = "navbar-nav">

            <li className = "nav-item">
              <navlink className = "nav-link"> Lexical Analysis Table </navlink>
            </li>

            <li className = "nav-item">
              <navlink  className = "nav-link"> Lexical Documentation </navlink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
