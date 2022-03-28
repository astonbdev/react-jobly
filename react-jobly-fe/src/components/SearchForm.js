import { useState } from "react"
import { Form, Button, Input, InputGroup } from "reactstrap"

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
    <Form className="SearchForm" onSubmit={handleSubmit}>
      <InputGroup>
        <Input className="SearchForm-input"
          type="search"
          placeholder="Enter Search Term"
          onChange={handleChange}
          name="query"
          value={formData.query} />
        <Button className="SearchForm-button">Submit</Button>
      </InputGroup>
    </Form>
  )
}

export default SearchForm;