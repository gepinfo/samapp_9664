import React from "react";
import "./manageusers.scss";
import {
  GpGetAllRoles,
  GpGetAllUsers,
  GpUpdateUsers,
} from "./manageuser.service";

export class Manageusers extends React.Component {
  // userslist: any;
  // rolelist: any;
  User: any;
  roles: any;
  selectedoption: any;
  role_id: any;

  state = { userslist: { data: [] }, rolelist: { data: [] },roleValue:"" };

  componentDidMount() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    GpGetAllUsers().then(
      (usersList) => {
        // this.userslist = userslist;
        this.setState({ userslist: usersList });
        // this.setState ({roleValeu:usersList.role.role})
      },
      (error) => {
        console.log("Error--->>>>>", error);
      }
    );
  }

  getRoles() {
    GpGetAllRoles().then(
      (roleList) => {
        // this.rolelist = rolelist;
        this.setState({ rolelist: roleList });
      },
      (error) => {
        console.log("Error--->>>>>", error);
      }
    );
  }

  handleChange(e: any) {
    this.User = { role: { role: e.target.value } };
  }

  save(user:any) {
    

    let selected_role = this.User.role.role;

    this.state.rolelist.data.map((element: any) => {
      if (element.role == selected_role) {
        this.role_id = element._id;
        const tempObj = {
          id: user._id,
          role: {
            role: user.role.role,
            _id: this.role_id,
          },
          email: user.email,
          username: user.username,
          firstname: user.firstname,
          lastname:user.lastname
        };

        GpUpdateUsers(tempObj).then(
          (response) => {

          },
          (error) => {
            console.log("error--save>>>>>", error);
          }
        );
      }
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>Manage Users</h1>
        </div>

        <div style={{ padding: "10px" }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userslist.data.map((key: any) => {
                return (
                  <tr>
                    <td>{key.email}</td>
                    <td>
                      <select value={key.role.role} onChange={(e) => this.handleChange(e)}>
                        {this.state.rolelist.data.map((roles: any) => {
                          return <option>{roles.role}</option>;
                        })}
                      </select>
                    </td>
                    <td>
                      <button onClick={()=>this.save(key)}>save</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Manageusers;
