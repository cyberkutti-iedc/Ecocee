const { useState } = React;

function RegistrationForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for form submission (e.g., sending data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-form">
      <h2>EcoCee Learning Hub Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" onChange={handleChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" onChange={handleChange} required />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
