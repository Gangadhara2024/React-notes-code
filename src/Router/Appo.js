import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import "../App.css";
import { BookMyShow } from "./BookMyShow";

const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* <nav>
        <div>
          <Link
            to="/user/home"
            style={{
              color: location.pathname === "/user/home" ? "red" : "black",
            }}
          >
            home
          </Link>
        </div>
        <div>
          <Link
            to="/user/about"
            style={{
              color: location.pathname === "/user/about" ? "red" : "black",
            }}
          >
            about
          </Link>
        </div>
      </nav> */}
      <nav>
        <NavLink
          to="/user/home"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          home
        </NavLink>
        <br></br>
        <NavLink
          to="/user/about"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          about
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export const Appo = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<p>404 page not found</p>} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="" element={<h1>Home screen</h1>} />
          <Route path="product/:abc" element={<h2>product view</h2>} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="user" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<h2>error screen</h2>} />
        </Routes>
      </BrowserRouter>
      <BookMyShow />
    </div>
  );
};
