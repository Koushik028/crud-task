import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      console.log(result);
      setUsers(result.data);
    } catch (error) {
      alert("Error");
    }
  };

  const deleteUser = async (e) => {
    try {
      setLoading(true);
      const ef = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${e}`
      );
      alert("Deleted");
      fetchData();
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr className="bg-dark text-white ">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/view/${user.id}`}
                      className="btn btn-warning mr-1"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-primary mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
