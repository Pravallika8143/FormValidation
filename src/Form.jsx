// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from 'yup';


// function Form(){
//     const formVal=useFormik({
//         initialValues:{
//            associatename:"",
//            associateid:"",
//            projectid:"",
//            location:"",
//            comments:"" 
//         },
//         validationSchema:Yup.object({
//             associatename:Yup.string().required("Please enter Associate Name"),
//             associateid:Yup.string().required("Please enter Associate Id"),
//             projectid:Yup.string().required("Please enter Project Id"),
//             location:Yup.string().required("Please select Location"),
//             comments:Yup.string().required("Please enter comments")
//     }),
//     onSubmit:(values)=>{
//         console.log(values)
//     },
// })
//     return(
//         <div>
//             <h1>Form Validation <sup style={{color:"red"}}>*</sup></h1>
//             <form onSubmit={formVal.handleSubmit}>
//             <input class="form-control form-control-lg" type="text" placeholder="Associate Name" /><br/>
//             <input class="form-control form-control-lg" type="text" placeholder="Associate Id"/><br/>
//             <input class="form-control form-control-lg" type="text" placeholder="Project ID"/><br/>
//             <input type="radio" style={{marginRight:"1%"}}/>Offshore  
//             <input type="radio" style={{marginRight:"1%",marginLeft:"5%"}}/>Onshore
//             <div>
//             <input class="form-control form-control-lg" type="text" placeholder="Select Location"/><br/>
//             </div>
//             <div style={{alignItems:"center"}}>
//             <input type="checkbox" className="me-2"/>HTML5,CSS3,JS
//             <input type="checkbox" className="ms-5 me-2"/>Angular 8
//             <input type="checkbox" className="ms-5 me-2"/>Express JS
//             <input type="checkbox" className="ms-5 me-2"/>SASS
//             <input type="checkbox" className="ms-5 me-2"/>React JS
//             <input type="checkbox" className="ms-5 me-2"/>MongoDB
//             <input type="checkbox" className="ms-5 me-2"/>ES5,ES6,ES7...
//             <input type="checkbox" className="ms-5 me-2"/>Veu JS<br/>
//             <input type="checkbox" className="me-2"/>MERN
//             <input type="checkbox" className="me-2"/>Bootstrap 4
//             <input type="checkbox" className="ms-5 me-2"/>TypeScript<br/><br/>
//             </div>
//             <h6>Upload Profile</h6>
//             <div >
//             <input class=" form-control form-control-file" type="file" placeholder="Choose File"/><br/>
//             </div>
//             <input class="form-control form-control-lg" type="textarea" rows="3" placeholder="Comments"/><br/>
//             <button className="btn btn-info m-2 text-white">Submit</button>
//             <button className="btn btn-danger">Reset</button>
//             </form> 
//         </div>
//     )

// }
// export default Form



// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from 'yup';



// function Form(){
//     const Employee=useFormik({
//         initialValues:{
//             name:"",
//             id:"",
//             pid:"",
//             country:"",
//             location:"",
//             languages:[],
//             profile:"",
//             comment:""

//         },
//         validationSchema: Yup.object({
//         name: Yup.string().required("Please enter Associate Name")
//                            .min(5, "Minimum 5 characters required")
//                            .max(30, "Maximum 30 characters allowed")
//                            .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed"),


//         id:Yup.string().required("please enter Associate id")
//                        .matches(/^\d{6}$/,"invali Associate id"),
//         pid:Yup.string().required("please enter the project id")
//                         .matches(/^[A-Za-z0-9]{12}$/),
//         profile:Yup.string().required("Please upload profile picture"),
//         comment:Yup.string().required("Please Enter Comments"),
//         languages:Yup.array().required("select minimum 5 languages")
//                              .min(5,"Select atleast 5 languages")
    

//         }),
//        onSubmit:(values)=>{
//        console.log(values)
//     }
//     })
    
//     return(
//     <div className="m-4 ">
//         <form className="mb-3 border border-dark p-5" onSubmit={Employee.handleSubmit}>
//         <h1>Form Validation<span className="required-star text-danger">*</span></h1>
//         <input type="text" name="name" placeholder="Associate Name" onChange={Employee.handleChange} size="70" class="form-control mb-2 border border-danger"/>
//           {Employee.touched.name && Employee.errors.name && (
//         <div style={{ color: "red" }}>{Employee.errors.name}</div>
//     )}
//         <input type="text" name="id" placeholder="Associate id" onChange={Employee.handleChange} size="70" class="form-control mb-2"/><br/>
//         {Employee.touched.id && Employee.errors.id &&(
//     <div style={{ color: "red" }}>{Employee.errors.id}</div>
//     )}
//         <input type="text" name="pid" placeholder="Project id" onChange={Employee.handleChange} size="90" class="form-control mb-2"/><br/>
//         {Employee.touched.pid && Employee.errors.pid &&(
//     <div style={{color:"red"}}>{Employee.errors.id}</div>
//         )}
//         <input type="radio" name="country" value="offshore" onChange={Employee.handleChange}/>Offshore
//         <input type="radio" name="country" value="onshore" onChange={Employee.handleChange} />Onshore<br/>
//         <select  onChange={Employee.handleChange} placeholder="Location" style={{width:"100%"}} class="form-control mb-2">
//             <option name="location">India</option>
//             <option name="location">germany</option>
//             <option name="location" >France</option>
//             <option name="location">Nepal</option>
//             </select>    
//         <input type="checkbox" name="languages" value="html" onChange={Employee.handleChange}/>HTML5,CSS3,JS
//         <input type="checkbox" name="languages" value="angular" onChange={Employee.handleChange}/>Angular 8
//         <input type="checkbox" name="languages" value="express" onChange={Employee.handleChange}/>Express JS
//         <input type="checkbox" name="languages" value="sass" onChange={Employee.handleChange}/>ASS
//         <input type="checkbox" name="languages" value="react" onChange={Employee.handleChange}/>React JS 
//         <input type="checkbox" name="languages" value="node" onChange={Employee.handleChange}/>Node JS
//         <input type="checkbox" name="languages" value="es5" onChange={Employee.handleChange}/>ES5,ES6,ES7
//         <input type="checkbox" name="languages" value="veu" onChange={Employee.handleChange}/>Veu JS
//         <input type="checkbox" name="languages" value="mongo" onChange={Employee.handleChange}/>Mongo DB
//         <input type="checkbox" name="languages" value="boostrap" onChange={Employee.handleChange}/>Boostap 4
//         <input type="checkbox" name="languages" value="typescript" onChange={Employee.handleChange}/>TypeScript
//         {Employee.touched.languages && Employee.errors.languages &&(<div style={{color:"res"}}>{Employee.errors.languages}</div>)}
//         <p>Upload Profile</p>
//         <input type="file" name="profile" onChange={Employee.handleChange} placeholder="Choose File" size="90"class="form-control mb-2"/><br/>
//         {Employee.touched.profile && Employee.errors.profile &&(<div style={{color:"red"}}>{Employee.errors.profile}</div>)}
//         <textarea name="comment" placeholder="comments"onChange={Employee.handleChange} class="form-control mb-2"  style={{height:"100px", width:"100%"}}/>
//         {Employee.touched.comment && Employee.errors.comment &&(<div style={{color:"red"}}>{Employee.errors.comment}</div>)}
//         <button className= "btn btn-info m-2 text-white">Submit</button>
//         <button className="btn btn-danger">Reset</button>
//         </form>
//     </div>
//    )
// }
// export default Form;

import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Form(){
    const Employee=useFormik({
        initialValues:{
            name:"",
            id:"",
            pid:"",
            country:"",
            location:"",
            languages:[],
            profile:"",
            comment:""

        },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please enter Associate Name")
        .min(5, "Minimum 5 characters required")
        .max(30, "Maximum 30 characters allowed")
        .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed"),

     id:Yup.string()
   
       .required("please enter Associate id")
       .matches(/^\d{6}$/,"invalid Associate id"),

     pid:Yup.string()
        .required("please enter the project id")
        .matches(/^[A-Za-z0-9]{12}$/), 
    
     profile:Yup.string()
      .required("Please upload profile picture"),

     comment:Yup.string()
      .required("Please Enter Comments"),
    
     languages:Yup.array()
      .required("select minimum 5 languages")
      .min(5,"Select atleast 5 languages"),
      location:Yup.string()
      .required("please Enter Location")
    
}),
    onSubmit:(values)=>{
    console.log(values)
}

})
   return(
    <div className="m-4 ">
        <form className="mb-3 border border-dark p-5" onSubmit={Employee.handleSubmit}>
        <h1>Form Validation<span className="required-star text-danger">*</span></h1>
        <input type="text" name="name" placeholder="Associate Name" onChange={Employee.handleChange} size="70" class="form-control mb-2 border border-danger"/>
        {Employee.touched.name && Employee.errors.name && (
        <div style={{ color: "red" }}>{Employee.errors.name}</div>
     )}
        <br></br>
    
       <input type="text" name="id" placeholder="Associate id" onChange={Employee.handleChange} size="70" class="form-control mb-2 border border-danger"/><br/>
        {Employee.touched.id && Employee.errors.id &&(
        <div style={{ color: "red" }}>{Employee.errors.id}</div>
     )}
         <br></br>

        <input type="text" name="pid" placeholder="Project id" onChange={Employee.handleChange} size="90" class="form-control mb-2 border border-danger"/><br/>
        {Employee.touched.pid && Employee.errors.pid &&(
        <div style={{color:"red"}}>{Employee.errors.id}</div>
     )}
        <br></br>

        <input type="radio" name="country" value="offshore" onChange={Employee.handleChange}/>Offshore
        <input type="radio" name="country" value="onshore" onChange={Employee.handleChange} />Onshore<br/>
        <select  onChange={Employee.handleChange} placeholder=" Select Location" style={{width:"100%"}} className="form-control mb-2 border border-danger" name="location">
           {Employee.values.country==="offshore" &&(
           <>
            <option name="location" value="chennai">Chennai</option>
            <option name="location" value="benglore">Benglore</option>
            <option name="location" value="hyderabad">Hyderabd</option>
            <option name="location" value="pune">Pune</option>
            <option name="location" value="kochi">Kochi</option>
            </>
           )}
            {Employee.values.country==="onshore" &&(
            <>
            <option name="location" value="us">US</option>
            <option name="location" value="non us">Non US</option>
            </>
            )}
            </select>

        <br></br>

        <div style={{display:"flex",flexWrap:"wrap",gap:'50px'}}>        
        <input type="checkbox" name="languages" value="html" onChange={Employee.handleChange}/>HTML5,CSS3,JS
        <input type="checkbox" name="languages" value="angular" onChange={Employee.handleChange}/>Angular 8
        <input type="checkbox" name="languages" value="express" onChange={Employee.handleChange}/>Express JS
        <input type="checkbox" name="languages" value="sass" onChange={Employee.handleChange}/>SASS
        <input type="checkbox" name="languages" value="react" onChange={Employee.handleChange}/>React JS 
        <input type="checkbox" name="languages" value="node" onChange={Employee.handleChange}/>Node JS
        <input type="checkbox" name="languages" value="es5" onChange={Employee.handleChange}/>ES5,ES6,ES7
        <input type="checkbox" name="languages" value="veu" onChange={Employee.handleChange}/>Veu JS
        <input type="checkbox" name="languages" value="mongo" onChange={Employee.handleChange}/>Mongo DB
        <input type="checkbox" name="languages" value="boostrap" onChange={Employee.handleChange}/>Boostap 4
        <input type="checkbox" name="languages" value="typescript" onChange={Employee.handleChange}/>TypeScript
        </div>
        {Employee.touched.languages && Employee.errors.languages &&(<div style={{color:"red"}}>{Employee.errors.languages}</div>)}
        <br></br>

        <b>Upload Profile</b>
        <input type="file" name="profile" onChange={Employee.handleChange} placeholder="Choose File" size="90"class="form-control mb-2" border border-danger/><br/>
        {Employee.touched.profile && Employee.errors.profile &&(<div style={{color:"red"}}>{Employee.errors.profile}</div>)}
        <textarea name="comment" placeholder="comments"onChange={Employee.handleChange} class="form-control mb-2 border border-danger"  style={{height:"100px", width:"100%"}}/>
        {Employee.touched.comment && Employee.errors.comment &&(<div style={{color:"red"}}>{Employee.errors.comment}</div>)}
        <button className= "btn btn-info m-2 text-white">Submit</button>
        <button className="btn btn-danger">Reset</button>
        </form>
    </div>
   )
}
export default Form;