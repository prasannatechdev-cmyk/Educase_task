export const validateLogin = (email, password) => {
  let newErrors = {};

  if (!email.trim()) {
    newErrors.email = "Email Address is required";
  } else if (!email.includes("@")) {
    newErrors.email = "Enter a valid Email Address";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  return newErrors;
};
