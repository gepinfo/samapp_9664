import { environment } from '../environments/environment';

    var  WEB_API = environment.WEB_API; 
     var UPLOAD_API = environment.UPLOAD_API;
    const MOBILE_API = environment.MOBILE_API;
     var WEB_API: string;
    var UPLOAD_API:string;
    
export const Web=()=>{
    return WEB_API;
}

export const Upload =()=>{
    return UPLOAD_API;
}