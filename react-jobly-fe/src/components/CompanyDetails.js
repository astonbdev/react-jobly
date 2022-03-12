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
  const [errors, setErrors] = useState(null);
  const params = useParams();
  const handleName = params.handle;

  useEffect(function getCompany() {
    async function fetchCompany() {
      try {
        const company = await JoblyApi.getCompany(handleName);
        console.log('company', company);
        setCompany(() => company);
        setIsFetching(false);
      } catch (err) {
        console.log('err', err);
        setErrors(() => ({msg: err[0]}));
        setIsFetching(false);
      }
    }
    fetchCompany();
  }, [handleName])

  if (isFetching) {
    return <p className='laoding'>Loading...</p>
  }

  return (
    <div className='CompanyDetails container'>
      {errors && <p className='errors'>{`Error: ${errors.msg}`}</p> }
      {company &&
        <div className='CompanyDetails-content'>
          <Company company={company} />
          <Jobs jobs={company.jobs} />
        </div>}
    </div>
  )
}

export default CompanyDetails;