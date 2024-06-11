import { Observable } from 'rxjs';
import axios from 'axios'
import React from 'react';
import { Web,Upload  } from '../../shared/shared.service';


//import { SharedService } from '../../shared/shared.service';


  
export const signup = (user: any,callback:any) => {
    //return this.http.post(this.sharedService.DESKTOP_API + '/signup', user);
    axios.post('http://'+window.location.hostname+':8000/web' + '/signup', user).then((res:any) =>
    callback(res)
    
);
}

export const login = (user:any) => {
    console.log('data from services', user)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return axios.post('http://'+window.location.hostname+':8000/web' + '/login', user, config);
}
  
export const Logout =(user:any)=>{
    return axios.put(Web()+'/logout',user)
}

export const Consent=(consent: any)=>{
    return axios.put(Web()+'/consent',consent);
  }