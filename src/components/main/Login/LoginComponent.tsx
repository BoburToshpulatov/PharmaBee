import { Login, LoginContainer } from "./AuthStyle";
import logo from "../../../assets/navbar-img/pharmabee-logo.svg";
import store from "../../../assets/Auth-img/image.png";
import { FaEnvelope, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel } from "@mui/material";

const LoginComponent = () => {
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

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
        <LoginContainer>
          <h1>Login</h1>
          <input
            id="username"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            required
          />
          <FaEnvelope className="user1" />
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="ENTER YOUR PASSWORD"
            type={visible ? "text" : "password"}
            required
          />
          {visible ? (
            <FaEye className="user1" onClick={() => setVisible(!visible)} />
          ) : (
            <FaEyeSlash className="user" onClick={() => setVisible(!visible)} />
          )}
          <div className="forgottenPassword">
            <FormControlLabel
              className="checkbox"
              control={<Checkbox />}
              label="Remember me"
            />
            <a href="#" target="_blank">
              <p>Forgot password?</p>
            </a>
          </div>
          <Button variant="contained">LOG IN</Button>
          <h3>Or login with</h3>
          <div className="socialIcons">
            <Button variant="outlined">
              <FaFacebook style={{ width: "25px", height: "25px" }} />
              <p>Facebook</p>
            </Button>
            <Button variant="outlined">
              <FaGoogle
                className="google"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "rgb(230, 87, 52)",
                }}
              />
              <p style={{ color: "gray" }}>Google</p>
            </Button>
          </div>
          <p className="signUp">
            Not a member? <a href="/signUp"> Sign up now</a>
          </p>
        </LoginContainer>
      </Login>
    </>
  );
};

export default LoginComponent;
