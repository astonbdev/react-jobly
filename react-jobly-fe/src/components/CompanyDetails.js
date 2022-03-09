import { useParams } from 'react-router-dom';
import Company from './Company';
import JobList from './JobList';

function CompanyDetails() {
  const params = useParams();
  const handleName = params.handle;

  const dummy = {
    name: handleName,
    description: '3T Company',
    logoUrl: '/logos/logo1.png',
    numEmployees: 100
  };
  return (
    <div className='CompanyDetails'>
      <Company company={dummy}/>
      <JobList />
    </div>
  )

}

export default CompanyDetails;