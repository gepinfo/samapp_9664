import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { GpGetEntityById } from "../authorization.service";

const Updateauthorization = (props: any) => {
  let queryID: any;
  let resources: any = {
    _id: '',
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    resource_name: '',
    roles: [],
    components: [],
  };
  let selected: any = [];
  let componentKeys: any;
 let  componentValues: any;
  const colDefs: any = [
    { headerName: "Component_Field", field: "componentTagName" },
    { headerName: "Roles", field: "componentTagAccess" },
  ];

  const [rowData, setRowdata] = useState([{}]);

  useEffect(() => {
    console.log("props", props);
    queryID = props.location.state.id;
    GpGetEntityById();
  }, []);

    const GpGetEntityById = () => {
      
      GpGetEntityById(queryID).then((data) => {

        resources._id = data.data._id;
            resources.resource_name = data.data.resource_name;
            selected = data.data.roles;
            resources.components = data.data.components
            let componentData = data.data.components[0];
            componentKeys = Object.keys(componentData);
            componentValues = Object.values(componentData);
        
            let tagComponent: any[] = [];
            for(let i = 0; i<componentKeys.length; i++){
              let values = componentValues[i].roles;
              var json = {
                  "componentTagName": `${componentKeys[i]}`,
                  "componentTagAccess": `${values}`
              }
              tagComponent.push(json);

            }
            setRowdata(tagComponent)
    });
  };

  return (
    <div style={{height: 400, width: 400}}>
      <AgGridReact className="ag-theme-alpine-dark" 
        rowData={rowData} columnDefs={colDefs}></AgGridReact>
    </div>
  );
};
export default Updateauthorization;
