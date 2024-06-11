import React from "react";
import axios from "axios";
import { Web,Upload  } from '../../shared/shared.service';

export const details = (user: any) => {
  console.log(user);
  const config = {
    headers: {
      'Content-Type': 'application/json'
              }
   }
  return axios.post(Web()+'/signup', user);
}

export const deleteUser=(id: any)=> {
    return axios.delete(Web () + '/deleteuser/' + id);
  }

  export const  Getallusers=()=> {
    return axios.get(Web()+'/getallusers');
  }

 export const  uploadImgFile=()=>{
    return (Upload()+'/addAttachment');
  }
export const  Getuser=(userid: any)=> {
  return axios.get(Web()+`/getuser/${userid}`);
}

export const  UpdateUserImg=(userobject: any)=> {
  return axios.put(Web()+'/updateuserimg', userobject);
}
export const Updateuser=(userobject: any)=> {
  return axios.put(Web()+'/updateuser/', userobject);
}
export const Getroles=()=> {
  return axios.get(Web()+'/getallroles');
}
