export function validateSignup(fullName, phone, email, password) {
  let newErrors = {};

  if (fullName.trim() === "") {
    newErrors.fullName = "Full Name is required";
  }

  if (phone.trim() === "") {
    newErrors.phone = "Phone Number is required";
  }

  if (email.trim() === "") {
    newErrors.email = "Email Address is required";
  }

  if (password.trim() === "") {
    newErrors.password = "Password is required";
  }

  return newErrors;
}
