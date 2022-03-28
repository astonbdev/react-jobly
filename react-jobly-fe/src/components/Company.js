
/** Company renders info about a specific company
 *
 * props: company obj like => {name, description, logoUrl, numEmployees}
 * state: none
 *
 * CompanyList, CompanyDetails -> Company
 */
function Company({ company }) {
  return (
    <div className="Company card mt-3 mb-3 bg-dark">
      <div className="Company-name card-header bg-primary text-white">{company.name}</div>
      <div className="Company-body card-body">
        <p className="Company-description card-text text-white">Description: {company.description}</p>
        {company.numEmployees &&
          <p className="Company-employees card-text text-white">Number Employees: {company.numEmployees}</p>}
        {company.logoUrl &&
          <img src={company.logoUrl} alt="logo" className="Company-logoUrl float-end" />}
      </div>
    </div>
  );
}
export default Company;