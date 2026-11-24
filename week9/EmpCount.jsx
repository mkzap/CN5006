import { useState, useEffect } from "react";

function EmpCount() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/persons/count")
      .then((response) => response.json())
      .then((data) => setCount(data.totalDocuments))
      .catch((err) => {
        console.error(err);
        setError("Unable to connect to server");
      });
  }, []);

  return (
    <div>
      <h2>Total Employees</h2>
      {error ? (
        <p>{error}</p>
      ) : count === null ? (
        <p>Loading...</p>
      ) : (
        <p>Total number of employees: {count}</p>
      )}
    </div>
  );
}

export default EmpCount;