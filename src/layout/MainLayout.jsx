import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
