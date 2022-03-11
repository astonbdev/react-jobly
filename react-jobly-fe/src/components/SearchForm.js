import { useState } from "react"

/** SearchForm 
 * 
 * props: handleSearch() sets the form data
 * state: formData => {query}
 * 
 * JobList, CompanyList => SearchForm
 */
function SearchForm({ handleSearch }) {
  const initialState = {
    query: ""
  }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
    setFormData(initialState);
  }

  return (
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input className="SearchForm-input"
          type="search"
          placeholder="Enter Search Term"
          onChange={handleChange}
          name="query"
          value={formData.query} />
        <button className="SearchForm-button">Submit</button>
      </form>
  )
}

export default SearchForm;