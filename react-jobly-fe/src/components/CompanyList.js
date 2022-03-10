import Company from './Company';
import { useEffect, useState } from 'react';
import JoblyApi from '../api';
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm';

/** Company List handles logic of getting companies and creating a list of them
 *
 * props: none
 * state: companies => [{handle, name, description, logoUrl numEmployees}], 
 *        isFetching => bool, 
 *         filterData => {query}
 * effect: getCompanies() fetch data from API
 *
 * Routes -> CompanyList -> (SearchForm,[Company ...])
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

  useEffect(function getCompanyByFilter() {
    if (!filterData) {
      return null;
    }

    async function fetchCompanies() {
      const companies = await JoblyApi.getCompaniesByName(filterData);

      setCompanies(() => companies);
      setIsFetching(false);
    }

    fetchCompanies();
  }, [filterData])

  if (isFetching) {
    return <p className='loading'>Loading...</p>
  }

  function handleSearch(query) {
    setFilterData(query);
    setIsFetching(true);
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={handleSearch} />
      {companies.map(c => {
        return (
          <Link key={c.handle} to={`/companies/${c.handle}`}>
            <Company company={c} />
          </Link>
        )
      })}
    </div>
  )
}

export default CompanyList;