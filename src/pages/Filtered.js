import React from "react";

function Filtered(props) {
  return (
    <div className="container">
      <h1>U.S. Employees</h1>
      <div className="row">
        <div className="card">
          <div className="card-body">
            <ul>
              {props.res.map((employee) => (
                <li key={employee.login.uuid}>
                  <span className="target">Name:</span> {employee.name.first}{" "}
                  {employee.name.last} <span className="target">Email:</span>{" "}
                  {employee.email}
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtered;
