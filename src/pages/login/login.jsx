// import "./login.css";

// import { useNavigate } from "react-router-dom";

// export default function Login() {

//   const navigate = useNavigate();

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
//           />

//         </div>

//         <div className="input-wrapper">

//           <label>Password</label>

//           <input
//             type="password"
//             placeholder="Enter password"
//           />

//         </div>

//         <button
//           className="login-btn"
//           onClick={() => navigate("/profile")}
//         >
//           Login
//         </button>

//       </div>

//     </div>
//   );
// }


// // -------------------------------------


import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateLogin } from "./login";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateLogin(
      email,
      password
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
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
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {errors.email && (
            <span className="error">
              * {errors.email}
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {errors.password && (
            <span className="error">
              * {errors.password}
            </span>
          )}
        </div>

        <button
          className="login-btn"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}