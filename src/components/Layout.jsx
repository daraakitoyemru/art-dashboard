import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
      <footer>this is my footer</footer>
    </div>
  );
};

export default Layout;
