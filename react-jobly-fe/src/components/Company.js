
/** Company renders info about a specific company
 *
 * props: company obj like => {name, description, logoUrl, numEmployees}
 * state: none
 *
 * CompanyList, CompanyDetails -> Company
 */
function Company({ company }) {
  return (
    <div className="Company card mt-3 mb-3 bg-white">
      <div className="Company-name card-header bg-white text-primary">{company.name}</div>
      <div className="Company-body card-body">
        <p className="Company-description card-text text-primary">Description: {company.description}</p>
        {company.numEmployees &&
          <p className="Company-employees card-text text-primary">Number Employees: {company.numEmployees}</p>}
        {company.logoUrl &&
          <img src={company.logoUrl} alt="logo" className="Company-logoUrl float-end" />}
      </div>
    </div>
  );
}
export default Company;