import React, { useEffect, useState } from "react";
import "./signup.scss";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { register } from "./signup.services";
import logo from "../../assets/img/Group2704.png";

const Signup = (props: any) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [visibility, setvisibility] = useState(false);

  const { firstname, lastname, email, password } = formData;

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
   const showPassword = () => {setvisibility(!visibility)};
  const onSubmit = async (e: any) => {
    e.preventDefault();
    register(formData, (res: any) => {
      console.log(res.data);
      if (res.data._id) {
        window.location.href = "/login";
      } else {
        console.log("sign in err", res.data);
      }
    });
  };

  useEffect(() => {});

  return (
    <div className="background-images">
      <div className="container left_align">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="main">
              <div className="geppetto-img">
                <img src={logo} />
              </div>
              <div className="login-Wrappe text-left ">
                <h3 className="login-title">Please Register</h3>
                <div className="text-align-left">
                  <Form onSubmit={(e: any) => onSubmit(e)}>
                    <FormGroup>
                      <Label className="login-label" for="firstname">
                        First Name
                      </Label>
                      <Input
                        className="login-input"
                        type="text"
                        name="firstname"
                        value={firstname}
                        minLength={1}
                        id="firstname"
                        placeholder="First Name"
                        onChange={(e: any) => onChange(e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="login-label" for="lastname">
                        Last Name
                      </Label>
                      <Input
                        className="login-input"
                        type="text"
                        name="lastname"
                        value={lastname}
                        id="lastname"
                        placeholder="Last Name"
                        onChange={(e: any) => onChange(e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="login-label" for="email">
                        Email
                      </Label>
                      <Input
                        className="login-input"
                        type="text"
                        name="email"
                        value={email}
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="Email"
                        onChange={(e: any) => onChange(e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="login-label" for="password">
                        Password
                      </Label>
                      <Input
                        className="login-input"
                        type={visibility ? "text" : "password"}
                        name="password"
                        value={password}
                        id="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        placeholder="password"
                        onChange={(e: any) => onChange(e)}
                      />
                      <span
                        style={{ cursor: "pointer",opacity: 0.5 }}
                        onClick={showPassword}
                      >
                        showPassword
                      </span>
                    </FormGroup>
                    <div className="text-center mb-3">
                      <Button className="login-btn-width">Submit</Button>
                    </div>
                  </Form>
                </div>
                <span className="signup-text-color">
                  Already Registered?{" "}
                  <span
                    className="span-text-link"
                    onClick={() => props.history.push("/login")}
                  >
                    Login Here
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
