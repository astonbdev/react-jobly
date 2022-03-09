import {useEffect, useState} from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_;

function JobList(){
  const[jobs, setJobs] = useState(null);

  useEffect(function getJobs(){
    async function fetchJobs() {
      const resp = await axios.get(BASE_URL);
    }
  })
  return (
    <div className="JobList">
      
    </div>
  )
}

export default JobList;