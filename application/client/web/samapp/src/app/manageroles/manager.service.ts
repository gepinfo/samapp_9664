
import axios from 'axios';
import { Web } from '../../shared/shared.service';




export const  GpGetAllRoles =()=> {
   console.log("service",Web())
    return axios.get(Web ()+ '/getallroles');
  }

  export const  GpSaveRoles=(payload:any)=> {
      console.log(payload)
    return axios.post(Web() + '/saveroles', payload);
  }

 export const GpDeleteRoles=(id:any)=>{
    return axios.delete(Web() + '/deleteroles/' + id);
  }


