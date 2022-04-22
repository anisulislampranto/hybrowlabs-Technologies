import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleAdd = async () => {
    const randomNumber = (await Math.floor(Math.random() * 10)) + 1;
    const res = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
    const genaratedData = await res.json();
    const addedData = [...users, genaratedData];
    setUsers(addedData);
  };

  // const hadleDelete = (name) => {
  //   const remainingUser = users.filter((user) => user.name !== name);
  //   setUsers(remainingUser);
  // };

  // reason behind using below splice method with index instead of above filter method with name is because when we were adding onCLik random user same user were adding more then once reason why when we were clickd to delete at the same time two user were removed which seems to be a buggy user experice thats why decided to use below splice method with index
  const hadleDelete = (index) => {
    const remainingUser = users.splice(index, 1);
    setUsers([...users], remainingUser);
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
            <tr key={index}>
              <td key={index} style={{ textAlign: "center" }}>
                {user.name}
                <button
                  onClick={() => hadleDelete(index)}
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
