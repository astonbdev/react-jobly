
/** Company renders info about a specific company
 *
 * props: company obj like => {name, description, logoUrl, numEmployees}
 * state: none
 *
 * CompanyList, CompanyDetails -> Company
 */
function Company({ company }) {
  return (
    <div className="Company">
      <h1 className="Company-name">Company Name: {company.name}</h1>
      <p className="Company-description">Description: {company.description}</p>
      {company.logoUrl &&
        <img src={company.logoUrl} alt="logo" className="Company-logoUrl" />}
      {company.numEmployees &&
        <p className="Company-numEmployees">Number Employees: {company.numEmployees}</p>}
    </div>
  );
}
export default Company;