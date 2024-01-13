document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.collapsible');
  const instances = M.Collapsible.init(elems);
});

function handleSubmit() {
  const formData = {
    fullName: document.getElementById('fullName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    email: document.getElementById('email').value,
    schoolOrCollege: document.getElementById('schoolOrCollege').value,
    specific: document.getElementById('specific').value,
    stream: document.getElementById('stream').value,
    year: document.getElementById('year').value,
    course: document.getElementById('course').value,
    programmingExperience: document.getElementById('programmingExperience').value,
    hearAboutUs: document.getElementById('hearAboutUs').value,
    questions: document.getElementById('questions').value,
    termsAndConditions: document.getElementById('termsAndConditions').checked,
  };

  // Add logic for form submission (e.g., sending data to a server)
  console.log('Form submitted:', formData);
}
