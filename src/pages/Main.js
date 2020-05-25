import React from "react";

function Main(props) {
  return (
    <div className="container">
      <h1>All Employees</h1>
      <div className="row">
        <div className="card">
        <div className="card-body">
        <ul>
                {props.res.map((employee) => (
                  <li key={employee.login.uuid}>
                  <span className="target">Name:</span> {employee.name.first}{" "}
                  {employee.name.last} <span className="target">Email:</span>{" "} 
                  {employee.email} <span className="target">Years:</span> {employee.registered.age} <span className="target">Nation:</span> {employee.nat}
                </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
