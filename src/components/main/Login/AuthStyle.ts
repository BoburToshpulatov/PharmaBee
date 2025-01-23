import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    135deg,
    rgb(167, 218, 192),
    rgba(200, 164, 223, 0.9)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  gap: 30px;

  /* Optional decorative elements */
`;

export const LoginContainer = styled.form`
  width: 370px;
  height: 440px;
  background: linear-gradient(145deg, #ffffff, #f4fbf4);
  z-index: 1;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 1em 3em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  gap: 10px;
  /* Elevated border details */
  border: 1px solid rgba(34, 153, 84, 0.2);

  /* Subtle inner shadow */
  box-shadow: inset 0 0.5em 0.5em rgba(255, 255, 255, 0.6),
    0 1em 3em rgba(0, 0, 0, 0.1);

  /* Optional decorative accents */

  h1 {
    font-size: 48px;
    font-family: Nunito;
    font-weight: 700;
    align-self: center;
    color: rgb(14, 62, 90);
  }
  input {
    height: 20px;
    border-radius: 10px;
    padding: 10px;
    color: #555;
    border: 1.5px solid lightgray;
    font-size: 14px;
  }
  input:focus {
    border: 1.5px solid gray;
    outline: none;
  }
  input[id="password"] {
    margin-top: -20px;
  }

  .user {
    position: relative;
    width: 25px;
    top: -40px;
    left: 335px;
    color: #555;
    cursor: pointer;
  }
  .user1 {
    position: relative;
    width: 25px;
    top: -40px;
    left: 335px;
    color: #777;
    cursor: pointer;
  }
  .forgottenPassword {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-family: Nunito;
    font-weight: 700;
    color: rgb(33, 125, 178);
    margin-top: -30px;
    a {
      color: rgb(33, 125, 178);
    }
  }
  h3 {
    align-self: center;
    font-size: 16px;
    color: #999;
    font-family: Nunito;
    margin-top: 5px;
    font-weight: 700;
  }
  .socialIcons {
    display: flex;
    justify-content: space-between;

    Button {
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: none;
      gap: 5px;
      p {
        font-size: 16px;
        margin-top: 1px;
      }
    }
  }
  .signUp {
    align-self: center;
    margin-top: 40px;
    color: #555;
    font-family: Nunito;
    font-weight: 600;
    a {
      color: rgb(33, 125, 178);
    }
  }
`;

export const SignUpContainer = styled.form`
  width: 370px;
  height: 460px;
  background: linear-gradient(145deg, #ffffff, #f4fbf4);
  z-index: 1;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 1em 3em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  gap: 10px;
  /* Elevated border details */
  border: 1px solid rgba(34, 153, 84, 0.2);

  /* Subtle inner shadow */
  box-shadow: inset 0 0.5em 0.5em rgba(255, 255, 255, 0.6),
    0 1em 3em rgba(0, 0, 0, 0.1);

  /* Optional decorative accents */

  h1 {
    font-size: 48px;
    font-family: Nunito;
    font-weight: 700;
    align-self: center;
    color: rgb(14, 62, 90);
  }
  input {
    height: 20px;
    border-radius: 10px;
    padding: 10px;
    color: #555;
    border: 1.5px solid lightgray;
    font-size: 14px;
  }
  input:focus {
    border: 1.5px solid gray;
    outline: none;
  }
  input[id="password"] {
    margin-top: -20px;
  }
  .user {
    position: relative;
    width: 25px;
    top: -40px;
    left: 335px;
    color: #555;
    cursor: pointer;
  }
  .user1 {
    position: relative;
    width: 25px;
    top: -40px;
    left: 335px;
    color: #777;
    cursor: pointer;
  }
  .checkbox {
    font-family: Nunito;
    font-weight: 700;
    font-size: 12px;
  }
  .forgottenPassword {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Nunito;
    font-weight: 700;
    color: rgb(33, 125, 178);
    margin-top: -30px;
    a {
      color: rgb(33, 125, 178);
    }
  }
  h3 {
    align-self: center;
    font-size: 16px;
    color: #999;
    font-family: Nunito;
    margin-top: 5px;
    font-weight: 700;
  }
  .socialIcons {
    display: flex;
    justify-content: space-between;

    Button {
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: none;
      gap: 5px;
      p {
        font-size: 16px;
        margin-top: 1px;
      }
    }
  }
  .signUp {
    align-self: center;
    margin-top: 40px;
    color: #555;
    font-family: Nunito;
    font-weight: 600;
    a {
      color: rgb(33, 125, 178);
    }
  }
`;
