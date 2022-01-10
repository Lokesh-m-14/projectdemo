import { Outlet, Link } from "react-router-dom";

function Layout  () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Firstpage">Firstpage</Link>
          </li>
          <li>
            <Link to="/Secondpage">Secondpage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;