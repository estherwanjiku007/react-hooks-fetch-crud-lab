import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [AllQTs,setAllQts]=useState([])
  useEffect(()=>{
    FetchData()
  },[])
  const FetchData=async()=>{
    const response=await fetch("http://localhost:4000/questions")
    const AllData=await response.json()
    setAllQts(AllData)
   // console.log(AllQTs)
    //console.log(AllData)
  }
 // console.log(AllQTs)
 // const myQts=[...AllQTs]
 async function DeleteData(id){
  // myQts.filter(()=>{
   // return (
     // <li>{myQts.id===id}</li>)
 //  })

 try{const allMyData=await fetch(`http://localhost:4000/questions/${id}`,{
  method:"DELETE"
 })
 console.log(id)
 if(allMyData.ok){
  setAllQts(AllQTs.filter((qts)=>qts.id!==id)
  )
 }
 else{
  console.log("failed to delete",allMyData.statusText)
 }
}

 catch(error){
  console.log("Failed to delete",error.statusText)
 }
 
  }
  const displayQts=AllQTs.map((qts,index)=>{
    return(      
        <form>
          <label key={index}>{qts.prompt}          
          </label>
          <select name="answers" id="answers">             
                  <option key={index}>{qts.answers}</option>
                   </select>
                   <button onClick={()=>DeleteData(qts.id)}>Delete</button>
          </form>
       
    )
  })
  return (
    <div>
    <section key={AllQTs.id}>
      <h1 >Quiz Questions</h1>
      <ul key={AllQTs.id}>
        {/* display QuestionItem components here after fetching */}
        {displayQts}
        </ul>
        <QuestionForm  AllTheData={FetchData}/>
       
    </section>
    
    </div>
  );
}

export default QuestionList;
