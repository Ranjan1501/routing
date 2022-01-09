import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./User.css";

// import axios from "axios";
export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getUsers = () => {
    setIsLoading(true);
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
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
        <img src={user.avatar} alt="userImage" />
        <br />
        {`Name: ${user.first_name} ${user.last_name}`}
        <br />
        {`Email: ${user.email} `}
      </div>
    </div>
  );
};
