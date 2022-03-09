
/**
 * renders info about specific job
 *
 * props: company obj like {title, salary, equity}
 * state: none
 *
 * JobList -> Job
 */
function Job({ job }){
  return (
    <div className="Job">
      <h1 className="Job-title">Title: {job.title}</h1>
      <p className="Job-salary">Salary: {job.salary}</p>
      {job.equity && <p className="Job-equity">equity: {job.equity}</p>}
    </div>
  )
}
export default Job;