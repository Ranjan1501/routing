import "antd/dist/antd.css";
import { Input, Space, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { FormContext } from "antd/lib/form/context";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});
  const {  handleToken } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="userContainer">
      <div className="login">
        <Input
          name="username"
          onChange={handleChange}
          style={{ width: "250px", height: "30px" }}
          size="small"
          placeholder="Enter Login Id"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Space direction="vertical">
          <Input.Password
            name="password"
            style={{ width: "250px", height: "30px" }}
            placeholder="Enter Password"
            onChange={handleChange}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>

        <br />
        <br />
        <Button
          type="primary"
          onClick={() => {
            try {
              fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
              });
              handleToken(Date.now());
            //   navigate("/users");
                navigate(-1); 
            } catch (e) {
              console.log("error", e);
            }
          }}
        >
          Login{" "}
        </Button>
        {/* <Input type="sumbit"   /> */}
      </div>
    </div>
  );
};
