// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { validateLogin } from "./login.validation.js";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = () => {
//     const validationErrors = validateLogin(email, password);
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       navigate("/profile");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h1>
//           Signin to your <br />
//           PopX account
//         </h1>

//         <p>
//           Lorem ipsum dolor sit amet,
//           <br />
//           consectetur adipiscing elit,
//         </p>

//         <div className="input-wrapper">
//           <label>Email Address</label>

//           <input
//             type="email"
//             placeholder="Enter email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {errors.email && <span className="error">* {errors.email}</span>}
//         </div>

//         <div className="input-wrapper">
//           <label>Password</label>

//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           {errors.password && (
//             <span className="error">* {errors.password}</span>
//           )}
//         </div>

//         <button className="login-btn" onClick={handleSubmit}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Login;

// --------------------------------------

import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateLogin } from "./login.validation.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>
          Signin to your <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="input-wrapper">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <span className="error">* {errors.email}</span>}
        </div>

        <div className="input-wrapper">
          <label>Password</label>

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

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
