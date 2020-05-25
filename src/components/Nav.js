import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link className='link' to="/Main">View All Employees</Link>
        </div>
        <div className="col">
          <Link className='link' to="/Filtered">View U.S. Employees</Link>
        </div>
        <div className="col">
          <Link className='link' to="/Sorted">View Employees by Seniority</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
