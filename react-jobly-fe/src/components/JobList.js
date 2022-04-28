import { useEffect, useState } from 'react';
import JoblyApi from '../api';
import Jobs from './Jobs';
import SearchForm from './SearchForm';

/** JobList handles logic of getting jobs and creating a list of them
 *
 * props: none
 * state: jobs => {id, title, salary, equity},
 *        filterData => {query}
 *        isFetching => bool
 * effect: getJobs() get data from API
 *
 * Routes -> JobList -> (SearchForm, Jobs)
 */
function JobList() {
  const [jobs, setJobs] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(function getJobs() {
    async function fetchJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(() => jobs);
      setIsFetching(false);
    }
    fetchJobs();
  }, []);

  useEffect(function getJobsByFilter() {
    if (!filterData) {
      return null;
    }

    async function fetchJobs() {
      const jobs = await JoblyApi.getJobsByTitle(filterData);
      setJobs(() => jobs);
      setIsFetching(false);
    }

    fetchJobs();
  }, [filterData]);

  function handleSearch(query) {
    setFilterData(query);
    setIsFetching(true);
  }

  if (isFetching) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <div className="JobList container">
      <SearchForm handleSearch={handleSearch} />
      <Jobs jobs={jobs} />
    </div>
  )
}

export default JobList;