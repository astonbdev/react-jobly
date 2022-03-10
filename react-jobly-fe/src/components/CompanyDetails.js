import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Company from './Company';
import Jobs from './Jobs'
import JoblyApi from '../api';

/** CompanyDetails renders company information and list of jobs
 *
 * props: none
 * state: company => {handle, name, description, logoUrl, numEmployees}, 
 *        isFetching => bool
 * effect: getCompany() get data from the API
 *
 * special: useParams get the company handle from route
 *
 * Routes -> CompanyDetails -> Company, Jobs
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
  }, [])

  if (isFetching) {
    return <p>Loading...</p>
  }

  return (
    <div className='CompanyDetails'>
      <Company company={company} />
      <Jobs jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetails;