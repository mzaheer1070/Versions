const button = document.getElementById("btn");
const output = document.getElementById("output");
const submitBtn = document.getElementById("submit-btn");
const formOutput = document.getElementById("form-output");
const formContainer = document.getElementById("form-container");

// Original button click - now also shows form
button.addEventListener("click", () => {
  output.textContent = "Button clicked successfully!";
  formContainer.style.display = "block";  // Show the form
});

// Handle form submission
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
      formOutput.textContent = `Thanks ${name}! We'll email ${email}`;
      // Optional: Clear form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    } else {
      formOutput.textContent = "Please fill in both fields!";
    }
  });
}