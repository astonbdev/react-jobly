import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Company from './Company';
import JobList from './JobList';
import JoblyApi from '../api';

/**
 * Renders company information and list of jobs
 *
 * props: none
 * state:
 * effects:
 *
 * special: useParams
 *
 * Routes -> CompanyDetails -> Company, JobList
 */
function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const params = useParams();
  const handleName = params.handle;

  useEffect(function getCompany() {

    async function fetchCompany() {
      const company = await JoblyApi.getCompany(handleName);
      setCompany(() => company);
      setIsFetching(false);
    }
    fetchCompany();
  },[])

  if(isFetching){
    return <p>Loading...</p>
  }

  return (
    <div className='CompanyDetails'>
      <Company company={company} />
      <JobList initialJobs={company.jobs} />
    </div>
  )

}

export default CompanyDetails;