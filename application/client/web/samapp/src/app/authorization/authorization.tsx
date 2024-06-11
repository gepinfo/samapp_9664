import './authorization.scss';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from 'react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {FormControl, FormLabel } from 'react-bootstrap';
import { AuthorizationService ,GpUpdate,GpGetEntityById,GpDelete,GpCreate,GpGetAllValues} from './authorization.service';

const Authorization = (props: any) => {
    let resources: any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        resource_name: '',
        roles: [],
        components: [],
    };
    // const columnDefs: any;
    // var rowData: any="";
    let deleteById: any = "";
    var rowdata1: any;
    // const allRowData: any;
    var gridApi: any;
    // const gridColumnApi: any;
    // params: any;
    // btnClickedHandler: any;
    // defaultColDef: { editable: boolean; sortable: boolean; filter: boolean; };
    const colDefs: any = [
        { headerName: 'Screen_Name', field: 'resource_name', flex: 1 },
        { headerName: 'Roles', field: 'roles', flex: 1 },]
    const [rowData,setRowdata]= useState([]);
    

    const paginationPageSize: any = 10;
    const page: any = 1; 
    let getAllRowData: any[] = [];
    // const myForm: FormGroup | any = ""
    const roles = ["admin", "user", "guest", "developer"];
    const selected: any[] = [];

     useEffect(() => {
        resources.created_by = sessionStorage.getItem('email');
        GetAllValues();
       // GpUpdate();
   }, [])
    

    const gridOptions:any = {
        rowSelection: 'multiple',
        groupSelectsChildren: true,
        groupSelectsFiltered: true,
        suppressAggFuncInHeader: true,
        suppressRowClickSelection: true,
        pagination: true,
        autoGroupColumnDef: {
            headerName: "Roles", field: "roles", width: 200,
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams: {
                checkbox: true
            }
        },
        getNodeChildDetails: (rowItem: any) => {
            if (rowItem.participants) {
                return {
                    group: true,
                    // open C be default
                    expanded: rowItem.group === 'Group C',
                    // provide ag-Grid with the children of this group
                    children: rowItem.participants,
                    // the key is used by the default group cellRenderer
                    key: rowItem.group
                };
            } else {
                return null;
            }
        },
       onGridReady(params: any){

       }   
    }
    const Update = () => {
       GpUpdate({resources}).then((data: any) => {
            resources.name = '';
            resources.description = '';
            resources.itemtag = [];
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }
    const Delete = (e: any) => {
        const rows = e.rowData;
        const selectedData = [
            rows
        ];
        const res = gridApi.updateRowData({ remove: selectedData });
        let deleteData = rows._id;
        GpDelete(deleteData).then((data: any) => {
            resources.name = '';
            resources.description = '';
            resources.itemtag = [];
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }

    const onCellValueChanged = (e: any) => {
        const rowIndex = e.rowIndex;
        const currentEntity: any = [];
        gridApi.forEachNode(function (node: { data: { name: any; }; }, nodIndex: any) {
            if (nodIndex !== rowIndex) {
                currentEntity.push(node.data.name);
            }
        });
    }

    const removeRow = (e: any) => {
        const rows = e.rowData;
        const selectedData = [
            rows
        ];
        const res = gridApi.updateRowData({ remove: selectedData });
    }

    const Create = () => {
        gridApi.forEachNode((node: { data: any; }) => rowdata1.push(node.data));
        resources.component = rowdata1;
        resources.roles = selected;
       GpCreate(resources).then((data: any) => {
            resources.resource_name = '';
            resources.roles = [];
            resources.component = [];
            // rowData = [];

        },
            (error: any) => {
                console.log('Error', error);
            });
    }
    const onRowClick = (event: any) => {
        let Indexdata:any = rowData[event.rowIndex];
        props.history.push({pathname:"/updateauthorization",state:{id: Indexdata._id }})
        // GpRoute(Indexdata._id);
        
    }

    const onGridReady = (params: any) => {
        gridApi = params.api;
        gridApi.sizeColumnsToFit();
        const gridColumnApi = params.columnApi;
    }

    const AddRows = () => {
        const rowta = {};
        gridApi.addItems([rowta]);
        gridApi.refreshView();

    }
    const onDeleteRow = () => {
        const selectedData = gridApi.getSelectedRows();
        gridApi.updateRowData({ remove: selectedData });
    }
    const GetAllValues = () => {
      
        GpGetAllValues().then((data: any) => {
            setRowdata(data.data);
           
        },
            (error: any) => {
                console.log('Error', error);
            });
    }

    const onSelectionChanged = (values: any) => {
       
        deleteById = values._id;
        // GpRoute(values._id);
    }

    return (
        <>
            <h2 className="screen-align">Authorization</h2>
            <section id="iwlt8m" className="gpd-section" >
                <div className='ag-style'>
                    <div id='test'>
                        <AgGridReact className="ag-theme-alpine-dark"
                           onRowClicked={onRowClick}
                           onGridReady={onGridReady}
                           gridOptions={gridOptions}
                           domLayout='autoHeight'
                            rowData={rowData}
                            columnDefs={colDefs}>
                        </AgGridReact>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Authorization;

