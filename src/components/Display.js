import React,  { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Main(){

 const [tableData, setTableData] = useState([]);
 const [formInputData, setformInputData] = useState(
    {
        Nama:'',
        Tanggal_Lahir:'',
        Jenis_Kelamin:'',
        Hobi:[],
        Agama:'Islam',
        Pesan:''
    }
 );
 
 const handleChange=(evnt)=>{  
    if(evnt.target.type === 'checkbox'){
        const val = formInputData[evnt.target.name]
        if(evnt.target.checked){
            val.push(evnt.target.value);
        }else{
            const idx = val.indexOf(evnt.target.value);
            val.splice(idx, 1);
        }
        
        const newInput = (data)=>({...data, [evnt.target.name]:val})
        setformInputData(newInput)
    }else{
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
        setformInputData(newInput)
    }
 }
  
 const handleSubmit= (evnt) =>{
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).some(res=>res==="")
     if(checkEmptyInput)
     {
        const newTableData = Object.keys(formInputData).map((key) => {
            const container = {}
            container.label = key.replace(/_/g, ' ')
            container.value = Array.isArray(formInputData[key]) ? formInputData[key].join(', ') : formInputData[key]
            return container
        });
        // const emptyInput= {
        //     Nama:'',
        //     Tanggal_Lahir:'',
        //     Jenis_Kelamin:'',
        //     Hobi:[],
        //     Agama:'Islam',
        //     Pesan:''
        // }
        // setformInputData(emptyInput)  
        setTableData(newTableData)
     }else{
         alert("Lengkapi Data")
     }
    
 }
 
 const handleReset=(evnt)=>{
    const emptyInput= {
        Nama:'',
        Tanggal_Lahir:'',
        Jenis_Kelamin:'',
        Hobi:[],
        Agama:'Islam',
        Pesan:''
    }
    setformInputData(emptyInput)  
    setTableData([])
 }

 return(
    <React.Fragment>
     <div className="container mt-5">
        <div className="card w-100">
            <div className="card-body">
                <h3 className="card-title text-center">Biodata</h3>
                <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleReset={handleReset}/>
                <Table tableData={tableData}/>
            </div>
        </div>
    </div>
    </React.Fragment>
 );
}
export default Main;