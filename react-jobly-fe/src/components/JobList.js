// import {useEffect, useState} from 'react';
import Job from './Job';

function JobList(){
  // const[jobs, setJobs] = useState(null);

  // useEffect(function getJobs(){
  //   async function fetchJobs() {
  //     const resp = await axios.get(BASE_URL);
  //   }
  // })
  const dummy = {
    title: 'swe',
    salary: 1,
    equity: 0.5
  }
  return (
    <div className="JobList">
      <Job job={dummy}/>
    </div>
  )
}

export default JobList;