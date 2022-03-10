import Job from "./Job"

/**Jobs render Job component
 * 
 * props: jobs => [{id, title, salary, equity}]
 * state: none
 * 
 * CompanyDetails, JobList => Jobs => Job
 */
function Jobs({ jobs }) {
  return (
    <div className="Jobs">
      {jobs.map((j) => {
        return <Job key={j.id} job={j} />
      })}
    </div>);
}

export default Jobs;