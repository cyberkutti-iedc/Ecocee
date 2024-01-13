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
          Phone Number:
          <input type="tel" name="phoneNumber" onChange={handleChange} required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label>
          School/College/Others:
          <select name="educationType" onChange={handleChange} required>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="others">Others</option>
          </select>
        </label>
        {formData.educationType === 'others' && (
          <label>
            Specify:
            <input type="text" name="educationDetails" onChange={handleChange} required />
          </label>
        )}
        {formData.educationType === 'college' && (
          <>
            <label>
              Stream:
              <input type="text" name="stream" onChange={handleChange} required />
            </label>
            <label>
              Year:
              <input type="text" name="year" onChange={handleChange} required />
            </label>
            <label>
              College Name:
              <input type="text" name="collegeName" onChange={handleChange} required />
            </label>
          </>
        )}
        <label>
          Select Course:
          <select name="selectedCourse" onChange={handleChange} required>
            <option value="python">Python</option>
            {/* Add more course options as needed */}
          </select>
        </label>
        <label>
          Previous Programming Experience:
          <textarea name="programmingExperience" onChange={handleChange}></textarea>
        </label>
        <label>
          How did you hear about us?
          <input type="text" name="howDidYouHear" onChange={handleChange} required />
        </label>
        <label>
          Any Questions?
          <textarea name="questions" onChange={handleChange}></textarea>
        </label>
        <label>
          <input type="checkbox" name="termsAgreed" required /> I agree to the Terms and Conditions.
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
