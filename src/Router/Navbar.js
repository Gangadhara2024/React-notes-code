import React from "react";
import "../app.scss";
import { NavLink } from "react-router-dom";

// const className = ({ isActive }) => (isActive ? "active-link" : "");
const className = ({ isActive }) => `link ${isActive ? "active-link" : "null"}`;

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className={className} to="/explore/movies">
        movies
      </NavLink>
      <NavLink className={className} to="/explore/stream">
        stream
      </NavLink>
      <NavLink className={className} to="/explore/events">
        events
      </NavLink>
      <NavLink className={className} to="/explore/play">
        plays
      </NavLink>
      <NavLink className={className} to="/explore/sports">
        sports
      </NavLink>
      <NavLink className={className} to="/explore/activities">
        activities
      </NavLink>
    </div>
  );
};
