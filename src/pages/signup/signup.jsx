import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignup } from "./signup.validation.js";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateSignup(fullName, phone, email, password);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>
          Create your <br />
          PopX account
        </h1>

        <div className="input-wrapper">
          <label>
            Full Name <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          {errors.fullName && (
            <span className="error">* {errors.fullName}</span>
          )}
        </div>

        <div className="input-wrapper">
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="number"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {errors.phone && <span className="error">* {errors.phone}</span>}
        </div>

        <div className="input-wrapper">
          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <span className="error">* {errors.email}</span>}
        </div>

        <div className="input-wrapper">
          <label>
            Password <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
            <span className="error">* {errors.password}</span>
          )}
        </div>

        <div className="input-wrapper">
          <label>Company Name</label>

          <input
            type="text"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?*</p>

          <div className="radio-options">
            <label>
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button className="login-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
