import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-2xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="px-5 bg-red-500 text-white font-medium rounded-2xl hover:bg-black">
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
