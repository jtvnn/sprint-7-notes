function MyForm() {
  const submitFunction = (formData: FormData) => {
    console.log(formData);
    alert(`Hey ${formData.get("firstName")}, welcome to the job application`);
  };
  return (
    <>
      <h3>Job Application Form</h3>
      <form action={submitFunction}>
        <table>
          <tr>
            <td>
              <label htmlFor="firstName">First Name: </label>
            </td>
            <td>
              <input type="text" name="firstName" id="firstName"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="lastName">Last Name: </label>
            </td>
            <td>
              <input type="text" name="lastName" id="lastName"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email: </label>
            </td>
            <td>
              <input type="email" name="email" id="email"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password: </label>
            </td>
            <td>
              <input type="password" name="password" id="password"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="dob">Date of Birth: </label>
            </td>
            <td>
              <input type="date" name="dob" id="dob"></input>
            </td>
          </tr>
        </table>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MyForm;
