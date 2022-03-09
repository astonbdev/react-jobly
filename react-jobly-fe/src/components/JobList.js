import {useEffect, useState} from 'react';
import Job from './Job';
import JoblyApi from '../api';

/**
 * handles logic of getting jobs and creating a list of them
 *
 * props: none
 * state:
 * effects:
 *
 * Routes -> JobList -> [Job ...]
 */
function JobList(){
  const[jobs, setJobs] = useState(null);
  const[isFetching, setIsFetching] = useState(true);

  useEffect(function getJobs(){
    async function fetchJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(() => jobs);
      setIsFetching(false);
    }
    fetchJobs();
  },[])

  if(isFetching){
    return <p className='loading'>Loading...</p>
  }
  
  return (
    <div className="JobList">
      {jobs.map((j) => {
        return <Job key={j.id} job={j}/>
      })}
    </div>
  )
}

export default JobList;