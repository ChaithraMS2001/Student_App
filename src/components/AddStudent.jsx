import React, { useState } from 'react'
import "./AddStudent.module.css"
import axiosInstance from '../helper/axiosInstence'
const AddStudent = () => {
    let [detailsData , setDetailsData] = useState({
        id: "",
        studentname: "",
        studentphone: "" ,
        studentemail: "",
        web: "",
        corejava: "" ,
        advancejava: "",
        apti: "",
        msql: "",
        percentage: "",
        total: "",
        result: ""
    }) 
    let data1 = (e)=>{
        setDetailsData({...detailsData, [e.target.name]:e.target.value})
    }
    let handleSubmit=(e) =>{
        try{
            axiosInstance.post("")
        }
    }
    
  return (
    <div>
      <form className='studentForm' action="">

      <label htmlFor="">ID</label>
        <input  type="number" name="id" id="" onChange={data1} /> <br /> <br />

        <label htmlFor="">Student Name:</label>
        <input  type="text" name='studentname' onChange={data1} /> <br /> <br />

        <label htmlFor="">Student phone</label>
        <input type="number"  name="studentphone" id="" onChange={data1}/> <br /> <br />

        <label htmlFor="">Email:</label>
        <input  type="email" name='studentemail' onChange={data1} /> <br /> <br />


 
 
        <h2>Student Marks</h2>
        <br />
        <label htmlFor="">Web</label>
        <input type="number" name="web" id="" onChange={data1} /> <br /> <br />
        <label htmlFor="">Java</label>
        <input type="number"  name="corejava" id="" onChange={data1}/> <br /> <br />
        <label htmlFor="">Advance Java</label>
        <input type="number" name="advancejava" id="" onChange={data1}/> <br /> <br />
        <label htmlFor="">Apti</label>
        <input type="number" name="apti" id="" onChange={data1} /> <br /> <br />
        <label htmlFor="">MySql</label>
        <input type="number"  name="msql" id="" onChange={data1}/> <br /> <br />
        <label htmlFor="">Percentage</label>
        <input type="number"  name="percentage" id="" onChange={data1}/> <br /> <br />
        <label htmlFor="">Total</label>
        <input type="number"  name="total" id="" onChange={data1}/> <br /> <br />
        <label htmlFor="">Result</label>
        <input type="number"  name="result" id="" onChange={data1}/> <br /> <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddStudent;