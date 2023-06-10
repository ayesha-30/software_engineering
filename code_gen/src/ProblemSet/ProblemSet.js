import React ,{useEffect,useState}from 'react'
import './ProblemSet.css'

export default function ProblemSet() {
  let [problems, setProblems] = useState([])

  const  getProblems=async()=>{
    const res=await fetch("https://codeforces.com/api/problemset.problems?tags=implementation");

    if(res.ok){
      const data=await res.json();
      console.log(data)
      setProblems(data.result.problems);

    }
    else{
      alert("Not found")
    }
  }
  
  useEffect(() => {
    getProblems()
    
  },[])
  return (
    <div className='text-center'>
       <h1>Problem Set</h1>
       <ul>
       {problems.map((problem,index)=>(
        <li>
        <a href={"https://codeforces.com/problemset/problem/" + problem.contestId + "/" + problem.index} target="_blank">{problem.name}</a>
        </li>
       ))}
       </ul>
    </div>
  )
}
