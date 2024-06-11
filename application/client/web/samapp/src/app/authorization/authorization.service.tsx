import React, { useEffect, useState } from "react";
import axios from "axios";
import { Web } from '../../shared/shared.service';
import Authorization from "./authorization";

export  const AuthorizationService = (props:any) => {

}


export const GpUpdate = (gcamData: any) => {
    console.log(gcamData);
 return (axios.put(Web ()+ '/gcamupdate', gcamData))
  }

 export const GpDelete = (Id: any) => {
    console.log('delete a item', Id);
    return axios.delete(Web () + '/gcamdeletebyid/' + Id);
}

export   const GpGetEntityById = (tagsId: any) => {

    return axios.post(Web ()+ '/gcambyid/' + tagsId);
}

export  const GpCreate = (resources: any) => {
    let jwt_token = sessionStorage.getItem('JwtToken');
    console.log('rowdata from data', resources);
    return axios.post(Web ()+ '/gcamgenerate' + `?jwt_token=${jwt_token}`, resources);
}

export const GpGetAllValues = () => {

    return(axios.get(Web () + '/gcamallscreens'))
     }
