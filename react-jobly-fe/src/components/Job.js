
/** Job renders info about specific job
 *
 * props: company obj like => {id, title, salary, equity}
 * state: none
 *
 * Jobs-> Job
 */
function Job({ job }) {
  return (
    <div className="Job">
      <h1 className="Job-title">Title: {job.title}</h1>
      <p className="Job-salary">Salary: {job.salary}</p>
      {job.equity && <p className="Job-equity">Equity: {job.equity}</p>}
    </div>
  )
}
export default Job;