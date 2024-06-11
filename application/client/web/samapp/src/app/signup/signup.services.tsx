import { signup } from "../login/login.services";

//register
export const register = async (data: any,callback:any) => {

    const body = JSON.stringify(data);
    
    signup(data ,(res: any) => {
        callback(res)
        
    });
}