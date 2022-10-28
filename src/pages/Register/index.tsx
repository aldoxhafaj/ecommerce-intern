import React from "react";
import { useState } from "react";
import axios from "axios";
import "./style.css";
// import IUser from "../interfaces/IUser";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    firstName: name,
    lastName: lastname,
    email: email,
    birthdate: birth,
    phone: phone,
    username: username,
    password: password,
  };

  const setData = (e: any) => {
    e.preventDefault();
    axios
      .post("authentication/register", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  console.log(data);

  return (
    // <form
    //   className="ui form"
    //   onSubmit={(e) => {
    //     setData(e);
    //   }}
    // >
    //   <div className="field">
    //     <label>First Name</label>
    //     <input
    //       type="text"
    //       name="first-name"
    //       placeholder="First Name"
    //       onChange={(e) => {
    //         setName(e.target.value);
    //         console.log(name);
    //       }}
    //     />
    //   </div>
    //   <div className="field">
    //     <label>Last Name</label>
    //     <input
    //       type="text"
    //       name="last-name"
    //       placeholder="Last Name"
    //       onChange={(e) => {
    //         setLastname(e.target.value);
    //         console.log(lastname);
    //       }}
    //     />
    //   </div>
    //   <div className="field">
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       name="email"
    //       placeholder="e-mail"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //         console.log(email);
    //       }}
    //     />
    //   </div>

    //   <div className="field">
    //     <label>BirthDate</label>
    //     <input
    //       type="date"
    //       name="birthday"
    //       placeholder="Birthday"
    //       onChange={(e) => {
    //         setBirth(e.target.value);
    //         console.log(birth);
    //       }}
    //     />
    //   </div>

    //   <div className="field">
    //     <label>Enter your phone number:</label>
    //     <input
    //       type="tel"
    //       id="phone"
    //       name="phone"
    //       onChange={(e) => {
    //         setPhone(e.target.value);
    //         console.log(phone);
    //       }}
    //     />
    //   </div>
    //   <div className="field">
    //     <label>User Name</label>
    //     <input
    //       type="text"
    //       name="user-name"
    //       placeholder="username"
    //       onChange={(e) => {
    //         setUsername(e.target.value);
    //         console.log(username);
    //       }}
    //     />
    //   </div>
    //   <div className="field">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //         console.log(password);
    //       }}
    //     />
    //   </div>

    //   <button className="ui button" type="submit">
    //     Submit
    //   </button>
    // </form>

    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 well well-sm">
          <legend>
            <a href="http://www.jquery2dotnet.com">
              <i className="glyphicon glyphicon-globe"></i>
            </a>{" "}
            Sign up!
          </legend>
          <form
            action="#"
            method="post"
            className="form"
            role="form"
            onSubmit={(e) => {
              setData(e);
            }}
          >
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <input
                  className="form-control"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                  required
                />
              </div>
              <div className="col-xs-6 col-md-6">
                <input
                  className="form-control"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => {
                    setLastname(e.target.value);
                    console.log(lastname);
                  }}
                  required
                />
              </div>
            </div>
            <input
              className="form-control"
              name="youremail"
              placeholder="Your Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />

            <input
              className="form-control"
              placeholder="New Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            <input
              className="form-control"
              placeholder="Re-enter Password"
              type="password"
            />
            <label>Birth Date</label>
            <input
              className="form-control"
              type="date"
              onChange={(e) => {
                setBirth(e.target.value);
                console.log(birth);
              }}
            />

            <label>Phone</label>
            <input
              className="form-control"
              placeholder="number"
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
                console.log(phone);
              }}
            />

            <label>Username</label>
            <input
              className="form-control"
              placeholder="username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
