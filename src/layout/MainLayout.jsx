import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header className="m-5 shadow-lg">
        {" "}
        <Navbar />
      </header>

      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
