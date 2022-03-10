function UserForm({fields}){
  return(
    <form>
      {fields.map(field => <input name={field}>Field</input>)}
      <button></button>
    </form>
  )
}

export default UserForm;