import Company from './Company';

function CompanyList(){

  const dummy = {
    name: 'apple',
    description: '3T Company',
    logoUrl: '/logos/logo1.png',
    numEmployees: 100
  }
  return (
    <div className="CompanyList">
      <Company company={dummy}/>
    </div>
  )
}

export default CompanyList;