import { Login, SignUpContainer } from "./AuthStyle";
import logo from "../../../assets/navbar-img/pharmabee-logo.svg";
import store from "../../../assets/Auth-img/image.png";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel } from "@mui/material";

const SignUp = () => {
  const [password, setPassword] = useState<string>("");

  const [password1, setPassword1] = useState<string>("");
  const [visible1, setVisible1] = useState<boolean>(false);
  return (
    <>
      <Login>
        <img
          src={store}
          alt="store"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            opacity: "0.8",
          }}
        />
        <img
          style={{
            width: "450px",
            zIndex: "1",
            marginTop: "-50px",
            marginRight: "10px",
          }}
          src={logo}
          alt="Logo"
        />
        <SignUpContainer>
          <h1>Sign Up</h1>
          <input id="email" type="email" placeholder="Full Name" required />
          <FaUser className="user1" />
          <input id="password" type="email" placeholder="Email" required />

          <FaEnvelope className="user1" />
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Phone Number"
            type="number"
            required
          />
          <FaPhone className="user1" />
          <input
            id="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Password"
            type={visible1 ? "text" : "password"}
            required
          />
          {visible1 ? (
            <FaEye className="user1" onClick={() => setVisible1(!visible1)} />
          ) : (
            <FaEyeSlash
              className="user"
              onClick={() => setVisible1(!visible1)}
            />
          )}
          <div className="forgottenPassword">
            <FormControlLabel
              className="checkbox"
              control={<Checkbox style={{ marginTop: "-24px" }} />}
              label={
                <>
                  By signing up you accept the{" "}
                  <a href="/terms" target="_blank" rel="noopener noreferrer">
                    Terms and Conditions
                  </a>
                </>
              }
            />
          </div>
          <Button variant="contained">SIGN UP</Button>

          <p className="signUp">
            Already have an account? <a href="/login"> Sign in</a>
          </p>
        </SignUpContainer>
      </Login>
    </>
  );
};

export default SignUp;
