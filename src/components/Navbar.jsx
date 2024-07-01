import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 px-5 rounded-2xl border">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-4xl font-bold font-serif italic text-info"
        >
          FN
        </Link>
      </div>
      <div className="navbar-center hidden rounded-2xl lg:flex">
        <ul className="menu menu-horizontal px-1  flex gap-5">
          <li className="text-xl font-medium font-serif">
            <Link to="/">Home</Link>
          </li>

          <li className="text-xl font-medium font-serif">
            <Link to="/about">About</Link>
          </li>
          <li className="text-xl font-medium font-serif">
            <Link to="/contact">Contact</Link>
          </li>

          {/* <li>
            <a>Item 3</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn font-serif text-xl font-medium">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
