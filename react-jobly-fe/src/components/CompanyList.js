import Company from './Company';
import {useEffect, useState} from 'react';
import JoblyApi from '../api';

/**
 * handles logic of getting companies and creating a list of them
 *
 * props: none
 * state:
 * effe
 *
 * Routes -> CompanyList -> [Company ...]
 */
function CompanyList(){
  const[companies, setCompanies] = useState(null);
  const[isFetching, setIsFetching] = useState(true);

  useEffect(function getCompanies(){
    async function fetchCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(() => companies);
      setIsFetching(false);
    }
    fetchCompanies();
  },[])

  if(isFetching){
    return <p className='loading'>Loading...</p>
  }
  // const dummy = {
  //   name: 'apple',
  //   description: '3T Company',
  //   logoUrl: '/logos/logo1.png',
  //   numEmployees: 100
  // }
  return (
    <div className="CompanyList">
      {companies.map(c => {
        return <Company key={c.handle} company={c}/>
      })}
    </div>
  )
}

export default CompanyList;