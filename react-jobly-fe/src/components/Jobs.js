import Job from "./Job"

function Jobs({jobs}){
  return(
    <div className="Jobs">
    {jobs.map((j) => {
        return <Job key={j.id} job={j}/>
      })}
    </div>);
}

export default Jobs;