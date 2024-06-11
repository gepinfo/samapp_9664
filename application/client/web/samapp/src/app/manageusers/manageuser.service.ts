import axios from 'axios';
import { Web } from '../../shared/shared.service';


export const  ManageUserService=()=> {}

export const  GpGetAllRoles=()=> {
    return axios.get(Web () + '/getallroles');
  }

  export const GpGetAllUsers=()=> {
    // console.log(axios.get(Web () + '/getallusers'))
    return axios.get(Web () + '/getallusers');
  }

  export const GpUpdateUsers=(payload:any)=>{
    return axios.put(Web () + '/updateuser', payload);
  }


