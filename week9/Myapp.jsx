import { Routes, Route, Link } from "react-router-dom";
import AddEmp from "./AddEmp";
import EmpList from "./EmpList";
import EmpUpdate from "./Empupdate";
import EmpCount from "./EmpCount";

function MyApp() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <nav>
        <ul>
          <li><Link to="/">Employee List</Link></li>
          <li><Link to="/add">Add Employee</Link></li>
          <li><Link to="/update">Update Employee</Link></li>
          <li><Link to="/count">Employee Count</Link></li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<EmpList />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/update" element={<EmpUpdate />} />
        <Route path="/count" element={<EmpCount />} />
      </Routes>
    </div>
  );
}

export default MyApp;