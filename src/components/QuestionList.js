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
    console.log(AllQTs)
    console.log(AllData)
  }
  console.log(AllQTs)
  const myQts=[...AllQTs]
  function DeleteData(id){
   myQts.filter(()=>{
    return (
      <li>{myQts.id===id}</li>)
   })
  }
  const displayQts=AllQTs.map((qts)=>{
    return(      
        <form>
          <label key={qts.id}>{qts.prompt}
          <button>Delete</button>
          </label>
          <select name="answers" id="answers">             
                  <option>{qts.answers}</option>
                   </select>
          </form>
       
    )
  })
  return (
    <div>
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {displayQts}
        </ul>
        <QuestionForm  AllTheData={FetchData}/>
        <button onClick={(()=>DeleteData(AllQTs.id))}>Delete</button>
    </section>
    
    </div>
  );
}

export default QuestionList;
