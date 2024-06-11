import { useEffect, useState } from 'react';
import "./sefscreen.scss";
import { GpSEF, getChartData} from './sefscreen.service';



const Sefscreen =()=> {

  
    var User = {
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    signintype: '',
    fbId: '',
    githubId: '',
    phonenumber: '',
    avatar: '',
    Idtoken: '',
    loggedinDate: '',
    loggedoutDate: '',
    role: '',
    org: '',
    org_country: '',
    org_sub1: '',
    org_sub2: '',
    org_sub3: '',
    }
    
    var url: any = '';
    var Id: any;
    var Image: any;
    var changeName: any;
    var open: any;
    const[firstName,setfirstName] = useState<any | null>();
    const[lastName,setlastName] = useState<any | null>();
    const [images, setImage] = useState<any | null>();
    var close: any;
    
    useEffect(()=> {
    User.created_by = sessionStorage.getItem('email') || '';
    Id = sessionStorage.getItem('Id');
    setImage(sessionStorage.getItem('Image'));
    
    GpSEF(Id).then((logindetails:any) => {
    setfirstName(logindetails.data.user.firstname);
 	 	setlastName(logindetails.data.user.lastname);});
                                const colors = ['#006400', '#B22222'];

                                getChartData(Id).then((getCharts:any) => {
                                  // tslint:disable-next-line:radix
                                  open = getCharts.data1;
                                  console.log(open);
                                  // tslint:disable-next-line:radix
                                  close = getCharts.data2;
                                  console.log(close);

                                
    });
    
    },[])
     
    
        return(
            <>
            <h2 className="screen-align">sefscreen</h2>
            <div id="margin" className="">
    <section id="i5oq1" className="">
        <div id="ivk7p" className="">
            <div id="imf4i" className="gjs-row">
                <div id="i047o" className="cell">
                    <div id="ijh0h" className="row">
                        <div id="i0vkz" className="cell">
                            <img id="idlpi" src={images} className="gpd-image-block" />
                        </div>
                        <div id="ial4t" className="cell">
                            
<h1 id="injea" className="gpd-header">
Welcome
                            </h1>

                            
<h2 id="itdvm" className="gpd-header">
{firstName} {lastName}
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
            <div id="i2wfh" className="gjs-row">
                <div id="itk1x" className="cell">
                    <div id="iag3f" className="row">
                        <div id="in3a6" className="cell"></div>
                    </div>
                </div>
            </div>
            <div id="i71ii" className="gjs-row gpd-grid">
                <div id="template-idwcd" className="cell gpd-clm"></div>
                <div id="template-iyxvw" className="cell gpd-clm"></div>
                <div id="template-iicbo" className="cell gpd-clm"></div>
            </div>
        </div>
    </section>
</div>
            </>
        );
    
}

export default Sefscreen;