import axios from 'axios';
import { Web } from '../../shared/shared.service';

 
   
    export const GpSEF =( Id: any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
                                
 	 	return axios.get(Web()+ `/systemEntryFeature/userdata/${Id}` + `?jwt_token=${jwt_token}`, undefined);}
                                export const getChartData=(Id:any)=>{
                                    return axios.get(Web() + `/systemEntryFeature/chart/${Id}`);
    }
