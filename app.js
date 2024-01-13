const { useState } = React;
const { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormGroup, Checkbox, FormControlLabel } = MaterialUI;

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
        <TextField
          label="Full Name"
          type="text"
          name="fullName"
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email Address"
          type="email"
          name="email"
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>School / College / Others</InputLabel>
          <Select
            name="schoolCollegeOthers"
            onChange={handleChange}
            required
          >
            <MenuItem value="school">School</MenuItem>
            <MenuItem value="college">College</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>
        {formData.schoolCollegeOthers === "others" && (
          <TextField
            label="Specify"
            type="text"
            name="specifySchoolCollege"
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )}
        {formData.schoolCollegeOthers === "college" && (
          <>
            <TextField
              label="Which Stream"
              type="text"
              name="collegeStream"
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Which Year"
              type="text"
              name="collegeYear"
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="College or School Name"
              type="text"
              name="collegeOrSchoolName"
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Course</InputLabel>
          <Select
            name="selectedCourse"
            onChange={handleChange}
            required
          >
            <MenuItem value="python">Python</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Previous Programming Experience"
          type="text"
          name="programmingExperience"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="How did you hear about us?"
          type="text"
          name="howDidYouHear"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Any Questions?"
          type="text"
          name="questions"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="agreeTerms" onChange={handleChange} />}
            label="I agree to the Terms and Conditions"
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
