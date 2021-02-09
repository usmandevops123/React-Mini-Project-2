import React, { useState } from "react"; 

const App=()=>{ 
  let Time=new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(Time);
  const UpdatedTime=()=>{
   Time=new Date().toLocaleTimeString();
   setCtime(Time);
  }; 
  setInterval(UpdatedTime,1000);
return(
<> 
<h1> {ctime} </h1> 
{/* <button onClick={UpdatedTime}> New Time </button> */}
</>
);
} ;
export default App;