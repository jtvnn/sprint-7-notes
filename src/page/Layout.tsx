import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <nav className="header">
        <div>LOGO</div>
        <div>SEARCH</div>
        <div className="nav-bar">
          <div className="nav-item">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/projects">Project</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
