import Company from './Company';
import { useEffect, useState } from 'react';
import JoblyApi from '../api';
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm';

/**
 * handles logic of getting companies and creating a list of them
 *
 * props: none
 * state:
 * effe
 *
 * Routes -> CompanyList -> [Company ...]
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [filterData, setFilterData] = useState(null);

  useEffect(function getCompanies() {
    async function fetchCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(() => companies);
      setIsFetching(false);
    }
    fetchCompanies();
  }, []);

  useEffect(function getCompanyByFilter(){
    if(!filterData){
      return null;
    }

    async function fetchCompanies(){
      const companies = await JoblyApi.getCompaniesByFilters(filterData);
      console.log("API CALL RSP: ", companies);

      setCompanies(()=> companies);
      setIsFetching(false);
    }

    fetchCompanies();
  }, [filterData])

  if (isFetching) {
    return <p className='loading'>Loading...</p>
  }

  function handleSearch(query){
    setFilterData(query);
    setIsFetching(true);
  }
  // const dummy = {
  //   name: 'apple',
  //   description: '3T Company',
  //   logoUrl: '/logos/logo1.png',
  //   numEmployees: 100
  // }
  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch}/>
      {companies.map(c => {
        return(
          <Link to={`/companies/${c.handle}`}>
            <Company key={c.handle} company={c} />
          </Link>
        )
      })}
    </div>
  )
}

export default CompanyList;