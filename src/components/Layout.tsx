import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>
        <ul>
          <li><Link to={'/'}>index</Link></li>
          <li><Link to={'/FirstPage'}>FirstPage</Link></li>
          <li><Link to={'/SecondPage'}>SecondPage</Link></li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
