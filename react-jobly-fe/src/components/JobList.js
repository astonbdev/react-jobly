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

  useEffect(function getJobs(){
    async function fetchJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(() => jobs);
    }
    fetchJobs();
  })
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