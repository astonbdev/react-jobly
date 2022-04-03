
/** Job renders info about specific job
 *
 * props: company obj like => {id, title, salary, equity}
 * state: none
 *
 * Jobs-> Job
 */
function Job({ job }) {
  return (
    <div className="Job card mt-3 mb-3">
      <div class="Job-title card-header bg-white text-primary">Job: {job.title}</div>
      <div className="Job-body card-body bg-white">
        <p className="Job-salary text-primary">Salary: {job.salary}</p>
        {job.equity && <p className="Job-equity text-primary">Equity: {job.equity}</p>}
      </div>
    </div>
  )
}
export default Job;