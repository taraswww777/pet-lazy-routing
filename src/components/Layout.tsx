import {Link} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

export const Layout:FC<PropsWithChildren> = ({children}) => {
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
        {children}
      </div>
    </div>
  );
}
