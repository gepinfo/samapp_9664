import "./profilesettings.scss";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import {
  Getallusers,
  uploadImgFile,
  Getuser,
  UpdateUserImg,
  Updateuser,
  Getroles,
} from "../user.service";
import { Upload } from "../../../shared/shared.service";
import {
  BrowserRouter,
  Route,
  Router,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useParams } from "react-router-dom";

const Profilesetting = (props: any) => {
  const [values, updvalues] = useState("");
  const [datas, upddatas] = useState("");
  const [value, updvalue] = useState("");
  const [data, upddata] = useState("");
  const [id, updid] = useState("");
  const [loading, setLoading] = useState(false);
  const [rolechange, setRolechange] = useState("null");
  const [defaultrole, setDefaultrole] = useState("");

  let x: any;
  let selectedFiles: any;
  let currentFileUpload: any;
  let img: any;
  let profileImg: any;
  let Userobject = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: {},
    id: "",
    username: "",
    avatar: "",
  };
  let userDefault = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: {},
    id: "",
    username: "",
    avatar: "",
  };
  const [roles, updRoles] = useState<any[]>([]);
  let defaultUserRole: any;
  // let defaultRole: {};
  let save: any;
  let updaterole: any;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    Userdata();
    console.log("onlyatprops");
  }, [props]);

  const Userdata = () => {
    console.log("props==>", props.location);
    Userdetails(props.location.state.id);
  };

  const Userdetails = (id: any) => {
    updid(props.location.state.id);
    upddata(props.location.state.data);
    upddatas(props.location.state.datas);
    updvalue(props.location.state.value);
    updvalues(props.location.state.values);
    console.log("userdetails called", id);
    Getuser(id).then(
      (users: any) => {
        console.log("dataof user===>", users);
        setDefaultrole(users.data.role.role);

        const user = users;
        Userobject.firstname = user.data.firstname;
        Userobject.lastname = user.data.lastname;
        Userobject.email = user.data.email;
        Userobject.username = user.data.username;
        Userobject.role = user.data.role.role;
        Userobject.password = user.data.password;
        Userobject.avatar = user.data.avatar;
        console.log("email", Userobject.role);

        Getroles().then((roledata) => {
          let Roles = roledata.data;
          updRoles(roledata.data);
          console.log("roles==>", Roles);
          // let Roles = {roles};
          const index = Roles.findIndex((x: any) => x.role === Userobject.role);
          console.log(index, "index");
        });
      },
      (error) => {
        console.error("error:", error);
      }
    );
  };
  const onChange = (e: any) => {
    const updaterole = roles.find((x: any) => x.role === e.target.value);
    console.log(e.target.value, updaterole);
    setRolechange(updaterole);
  };
  const cancle = () => {
    history.push("/usermanagement");
  };

  const Update = (e: any) => {
    e.preventDefault();
    var imgJson = {
      avatar: img,
      id: id,
    };

    UpdateUserImg(imgJson).then((response) => {});

    Userobject.role = rolechange;
    //Made a change in this file
    Userobject.id = id;
    Userobject.firstname = data;
    Userobject.lastname = datas;
    Userobject.email = value;
    Userobject.username = Userobject.email;
    const userRole = sessionStorage.getItem("Access");
    if (Userobject.role == "null" || Userobject.role == undefined) {
      const updatedefaultrole = roles.find((x: any) => x.role === defaultrole);
      userDefault.firstname = Userobject.firstname;
      userDefault.lastname = Userobject.lastname;
      userDefault.email = Userobject.email;
      userDefault.role = updatedefaultrole;
      userDefault.id = Userobject.id;
      userDefault.username = Userobject.username;
      Updateuser(userDefault).then(
        (data) => {
          
          history.push("/usermanagement");
        },
        (error) => {
          console.log("error", error);
        }
      );
    } else {
      Updateuser(Userobject).then(
        (data) => {
          console.log(data, "updateddata");

          // history.push("/usermanagement");
        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  };

  const onFileSelected = (event: any) => {
    selectedFiles = event.target.files;
    currentFileUpload = selectedFiles.item(0);
    gepfileToUpload(currentFileUpload);
  };
  const gepfileToUpload = (fileToUpload: File) => {
    const endpoint = uploadImgFile();
    const formData: FormData = new FormData();
    formData.append("fileKey", fileToUpload, fileToUpload.name);
    fetch(endpoint, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resultData) => {
        let dynamic_Ipdata = `${Upload()}/${resultData}`;
        img = dynamic_Ipdata;
        console.log(img);
      });
  };

  return (
    <div className="profileform">
      <form onSubmit={(e) => Update(e)}>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="label color">
                <strong className="color">First Name</strong>
              </Label>
              <input
                value={data}
                type="text"
                className="form-control"
                placeholder="Firstname"
                name="firstname"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="label color">
                <strong className="color">Last Name</strong>
              </Label>
              <input
                value={datas}
                type="text"
                className="form-control"
                placeholder="Lastname"
                name="lastname"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="label color">
                <strong className="color">User Name</strong>
              </Label>
              <input
                value={Userobject.username}
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
              />
            </div>
          </div>
        </div>
        {/* <!-- <div className="col-sm-6">
                    <div className="form-group">
                        <Label className="Label"><strong>Password</strong></Label>
                        <input type="text" readonly className="form-control" placeholder="Password" [(ngModel)]='Userobject.password' name="password">
                    </div>
                </div> --{">"} */}
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <Label>
                <strong className="color">Email</strong>
              </Label>
              <input
                value={value}
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className=" color">
                <strong className="color">Profile Pic</strong>
              </Label>
              <input
                id="exampleFile"
                name="file"
                type="file"
                className="form-control-file"
                value=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <Label className=" color">
                <strong className="color">Role</strong>
              </Label>
              <select
                className="form-control role"
                value={defaultrole}
                onChange={(e) => onChange(e)}
              >
                
                {roles.map((key) => {
                  return <option>{key.role}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="submit" className="btn btn-primary" onClick={cancle}>
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profilesetting;
