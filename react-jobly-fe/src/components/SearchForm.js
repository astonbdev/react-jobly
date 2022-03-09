import { useState } from "react"

function SearchForm({ handleSearch }) {
  const initialState = {
    name: ""
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
    <div className="SearchForm">
      <form className="SearchForm-form" onSubmit={handleSubmit}>
        <input className="SearchForm-input"
          placeholder="Enter Search Term"
          onChange={handleChange}
          name="name" />
        <button>Submit</button>
      </form>
    </div>
  )

}

export default SearchForm;