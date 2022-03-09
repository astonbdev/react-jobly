
/**
 * renders info about specific company
 *
 * props: company obj like {name, description, logoUrl, numEmployees}
 * state: none
 *
 * CompanyList, CompanyDetails -> Company
 */
function Company({ company }){
  return (
    <div className="Company">
      <h1 className="Company-name">{company.name}</h1>
      <p className="Company-description">{company.description}</p>
      <img src={company.logoUrl} alt="logo" className="Company-logoUrl"/>
      {company.numEmployees &&
        <p className="Company-numEmployees">{company.numEmployees}</p>}
    </div>
  )
}
export default Company;