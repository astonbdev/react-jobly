
/** Job renders info about specific job
 *
 * props: company obj like => {id, title, salary, equity}
 * state: none
 *
 * Jobs-> Job
 */
function Job({ job }) {
  return (
    <div className="Job card mt-3 mb-3 bg-primary">
      <div class="Job-title card-header">Job: {job.title}</div>
      <div className="Job-body card-body">
        <p className="Job-salary card-text">Salary: {job.salary}</p>
        {job.equity && <p className="Job-equity card-text">Equity: {job.equity}</p>}
      </div>
    </div>
  )
}
export default Job;