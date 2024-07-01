import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header className="my-4 shadow-xl">
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
