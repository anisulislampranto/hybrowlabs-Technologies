import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  const handleAdd = async () => {
    const randomNumber = (await Math.floor(Math.random() * 10)) + 1;
    const res = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
    const genaratedData = await res.json();
    const addedData = [...users, genaratedData];
    setUsers(addedData);
  };

  const hadleDelete = (name) => {
    const remainingUser = users.filter((user) => user.name !== name);
    setUsers(remainingUser);
  };

  return (
    <div>
      <button
        onClick={handleAdd}
        style={{ marginLeft: "40%", marginTop: "1%" }}
      >
        Add Record
      </button>

      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td style={{ textAlign: "center" }}>
                {user.name}
                <button
                  onClick={() => hadleDelete(user.name)}
                  style={{ marginLeft: "20px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
