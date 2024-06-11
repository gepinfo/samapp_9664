import e from "express";
import React from "react";
// import "./manageroles.scss";
// import logo from '../../assets/img/Group2704.png';
import { GpSaveRoles, GpDeleteRoles, GpGetAllRoles } from './manager.service';


export class Manageroles extends React.Component {

    queryId: any;
    default_role = ["Admin", "User", "Guest"]
    custom_role: any[] = []
    role = ''
    work:any;
    list:any;
   state ={enablebutton : true, name:"",roleList:{data:[]},work:""} 

    componentDidMount(){
           this.getRoles();
    }
    updateRole(e:any){
        this.setState({name:e.target.value})
    }
    save=(e:any)=>{
       
        this.custom_role.push(this.state.name);
        // console.log("Array",this.custom_role)
        this.setState ( {enablebutton : true});
        let rolename = { "role": this.state.name }
        // console.log("role",rolename)
        this.setState({name:""})
        GpSaveRoles(rolename).then((data: any) => {
            this.getRoles();
                 }, (error:any) => {
            console.log('Error in data save ---->>', error);
        });
       
    }

    remove(role:any) {
        console.log("role",role)
        GpDeleteRoles(role._id).then((data:any) => {
            console.log("id",role._id)
            this.getRoles();
        }, (error:any) => {
            console.log('Error in data save ---->>', error);
        });
    }

    getInputValue(e: any) {
        var event = e;
        if (event.length > 0) {
            this.state.enablebutton = false;
            console.log(event)
        }
        else {
          this.setState ( {enablebutton : this.state.enablebutton=true});
          
        }
    }

    getRoles() {
        GpGetAllRoles().then((rolelist:any) => {
      this.setState({roleList :rolelist})
    // console.log("list", this.state.roleList)
        }, (error:any) => {
            console.log('Error--->>>>>', error);
        });}

    render() {
        return (
            <>
                <div style={{ "padding": "3px" }}>
                    <h1>Create Roles</h1>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 div_width" >
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8" style={{ "padding": "8px" }}>
                        <div >
                            {/* <label htmlFor="name" className="labe">Create Role</label> */}
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Role Name"
                                onChange={this.updateRole.bind(this)}
                              />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn" onClick={this.save}>
                        Add Role
                    </button>
                </div>
                {/* className="table table-bordered" */}

                <div style={{ "padding": "8px" }}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Roles</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr> */}
                                {this.state.roleList.data.map((key:any) => 
                                     (<tr>
                                        <td>{key.role}</td>
                                   <td>
                                    <button type="button" onClick={()=>this.remove(key)}>Remove Role</button>
                                </td>
                                    </tr>)
                                        
                                )}
                                {/* <td>
                                    <button type="button" onClick={this.remove}>Remove Role</button>
                                </td> */}
                            {/* </tr> */}
                        </tbody>
                    </table>
                </div>

            </>

        );
    }
}

export default Manageroles;