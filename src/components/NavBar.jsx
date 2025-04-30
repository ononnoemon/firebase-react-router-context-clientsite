import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className=" w-[1250px] mx-auto flex">
        <div className="flex-1">
          <span className="text-xl font-bold">Cafe Coffee</span>
        </div>
        <div className="flex-none">
          <ul>
            <NavLink to={'/'}><button className="btn btn-active btn-primary">Home</button> </NavLink>
            <NavLink to={'addcoffee'}><button className="btn btn-active btn-primary">Add Coffee</button> </NavLink>
            <NavLink to={'view'}><button className="btn btn-active btn-primary">View Coffee</button> </NavLink>
            <NavLink to={'signup'}><button className="btn btn-active btn-primary">Sign Up</button> </NavLink>
            <NavLink to={'signin'}><button className="btn btn-active btn-primary">Sign In</button> </NavLink>
            <NavLink to={'users'}><button className="btn btn-active btn-primary">Users</button> </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
