import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";

export const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUser] = useState([]);
  const getUsers = () => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/users")

      .then((res) => {
        setUser(res.data.data);
        console.log("res:", res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error:", err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="userContainer">
      <div className="user">
        {users.map((user) => (
          <div key={user.id}>
            <Link className="Link" to={`/users/${user.id}`}>
              {<img src={user.avatar} alt="UserImage" />}
            </Link>
            <br />
            {`Name: ${user.first_name} ${user.last_name}`}
            <br />
            {`Email: ${user.email}`}
          </div>
        ))}
      </div>
    </div>
  );
};
