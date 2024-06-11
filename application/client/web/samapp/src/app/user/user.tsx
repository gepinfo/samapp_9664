import './user.scss';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from "reactstrap";
import { useEffect, useState } from 'react';
import { details, deleteUser, Getallusers, uploadImgFile } from './user.service'
import { Web } from '../../shared/shared.service';
import { AgGridReact } from 'ag-grid-react';
import axios from'axios';
import { Link,useHistory } from 'react-router-dom';

const User = () => {
  var gridApi: any;
  var Userdetails: any;
  var selectedFiles: any;
  var currentFileUpload: any;
  var img: any;
  var Avatar:any;
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    avatar: ''
  });
  const history = useHistory();    
  const [formErrors, setFormErrors] = useState({ firstname: "", lastname: "", username: "", email: "", password: "" })
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
   const [rowData,setrowData] = useState<any | null>(null)
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  
  const adduser = (e: any) => {
    // console.log("formData==>",formData)
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    details(formData).then((datas: any) => {
      console.log('data==>', datas);
      //  window.location.reload();
    });
  }

  useEffect(() => {
    agGridInitialization();
    Users();
    console.log("started")
  }, []);

  const validate = (values: any) => {
    var errors: any = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passw = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'
    if (!values.firstname) {
      errors.firstname = "firstname is required"
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required"
    }
    if (!values.username) {
      errors.username = "username is required"
    }
    if (!values.email) {
      errors.email = "email is required"
    }
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "password is required"
    }
    // }else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    else if (!values.password.match(passw)) {
      errors.password = "A Password must be 8 character and must have a Uppercase , Lowercase and a Special character"
      console.log(values.password)
    }

    return errors;
  }

  const Users = () => {
    Getallusers().then(data => {
      setrowData(data.data)
      Userdetails = data;
    }, error => {
      console.log("error", error);
    });
  }
  const agGridInitialization = () => {
    let columnDefs = [
      
      {
        headerName: 'Firstname',
        field: 'firstname',
        minWidth: 250,
        flex: 1 
      },
      {
        headerName: 'Lastname',
        field: 'lastname',
        minWidth: 250,
        flex: 1 
      },
      {
        headerName: 'Username',
        field: 'username',
        minWidth: 250,
        flex: 1 
      },
      {
        headerName: 'Email',
        field: 'email',
        minWidth: 250,
        flex: 1 
      },
      {
        headerName: 'Role',
        field: 'role.role',
        minWidth: 250,
        flex: 1 
      },
      {
        headerName: 'id',
        field: '_id',
        minWidth: 250,
        flex: 1 
      },
      //To delete and edit the user.
      {
        headerName: 'Action',
        minminWidth: 100,
        editable: false,
        sortable: false,
        filter: false,
        flex: 1 ,
        // cellRenderer:actionCellRenderer,
        cellRendererFramework:(params:any)=>
        <button onClick={()=>Editaction (params)}>Edit</button>
      
       },
      {
        headerName: 'Delete',
        editable: false,
        sortable: false,
        minminWidth: 150,
        filter: false,
        flex: 1 ,
        cellRendererFramework:(params:any)=>
          <button onClick={()=>onDeleteButtonClick (params)}>Delete</button>
        
      },

      {
        headerName: 'Picture',
        field: 'avatar',
        minWidth: 100,
        sortable: true,
        filter: false,
        autoHeight: true,
        flex: 1 
        // ButtonRendererComponent: ({  }) => `<img style="height: 14px; minWidth: 14px" src="" />`
      }
    ];
     return columnDefs;
     
  }
  const onGridReady = (params: any) => {
    gridApi = params.api;
    gridApi.sizeColumnsToFit();
    // gridColumnApi = params.columnApi;
  }

  const   Editaction = (e: any) => {
    const rows = e.data;
    history.push({pathname:"/profile",state: { id: rows._id ,data:rows.firstname,datas:rows.lastname,value:rows.email,values:rows.role.role}})

  }
  const onDeleteButtonClick = (e: any) => {
    if (e) {
      const rows = e.data;
      deleteUser(rows._id).then(response => {
      }, error => {
        console.error('error:', error);
      });
      window.location.reload();
    }
  }
  const onFileSelected = (event: any) => {
    selectedFiles = event.target.files;
    currentFileUpload = selectedFiles.item(0);
    // console.log("cureent",currentFileUpload)
    gepfileToUpload(currentFileUpload);
  }

  var resultId: any;
  const gepfileToUpload = (fileToUpload: File) => {
    const endpoint = uploadImgFile();
    
    const formKey: FormData = new FormData();
    formKey.append('fileKey', fileToUpload, fileToUpload.name);
    
    axios.post(endpoint,formKey).then((resultData)=>{
      
      let img = `${Web()}/${resultData.data}`
      // let userImage = img
      //  console.log("HR", dynamic)
      // setImg(dynamic);
     
       Avatar = { ...formData,avatar:img}
      
    
    })
  }

  return (
    <div>
      <div className="top_align" >
        {/* commanding out for checking purpose need to intialize grid */}
        <AgGridReact className="ag-theme-alpine-dark"
          onGridReady={onGridReady}
          domLayout='autoHeight'
          rowData={rowData}
          columnDefs={agGridInitialization()}>
        </AgGridReact>
      </div>
      <Form onSubmit={adduser}>
        <div className='row'>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="login-label label" for="exampleName">
                <strong> first Name </strong>
              </Label>
              <Input     
                id="first"
                name="firstname"
                value={formData.firstname}
                placeholder="firstName"
                type="text"
                onChange={e => handleChange(e)}

              />
            </div>
            <p className='validate'>{formErrors.firstname}</p>
          </div>

          <div className="col-sm-4">
            <div className="form-group">
              <Label className="login-label label" for="examplePassword">
                <strong> Last Name </strong>
              </Label>
              <Input
                id="last"
                name="lastname"
                placeholder="last name "
                type="text"
                value={formData.lastname}
                onChange={(e:any) => handleChange(e)}
              />
            </div>
            <p className='validate'>{formErrors.lastname}</p>

          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="login-label label" for="examplePassword">
                <strong>  User Name </strong>
              </Label>
              <Input
                id="user"
                name="username"
                placeholder="username "
                type="text"
                value={formData.username}
                onChange={(e:any) => handleChange(e)}

              />
            </div>
            <p className='validate'>{formErrors.username}</p>

          </div>
        </div>
        <div className='row'>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="login-label label" for="exampleEmail">
                <strong>Email </strong>
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="enter your email"
                type='email'
                value={formData.email}
                onChange={(e:any) => handleChange(e)}

              />
            </div>
            <p className='validate'>{formErrors.email}</p>

          </div>
          <div className="col-sm-4">
            <div className="form-group">
              <Label className="login-label label" for="examplePassword">
                <strong> Password</strong>
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="enter your password"
                type="password"
                value={formData.password}
                onChange={(e:any) => handleChange(e)}
              />

            </div>
            <p className='validate'>{formErrors.password}</p>

          </div>

          <div className="col-sm-4">
            <div className="form-group">
              <Label className=" login-label label"><strong>Profile Pic</strong></Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                // value={formData.avatar}
                onChange={onFileSelected}
              />
            </div>
          </div>

        </div>
        <div >
          <button type="submit" className="btn btn-primary">submit</button>
        </div>
      </Form >

    </div >

  )

}

export default User;
