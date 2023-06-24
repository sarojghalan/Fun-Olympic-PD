import React, { useState } from "react";
import SampleButton from "../../Components/Button/SampleButton";
import SampleInput from "../../Components/Input/SampleInput";
import { logo } from "../../assets";
import "../../Scss/Main.scss";
interface loginI {
  email: string;
  password: string;
}
function Login() {
  const credentials: loginI = {
    email: "",
    password: "",
  };
  const [loginCredentials, setLoginCredentials] = useState<loginI>(credentials);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="login__wrapper">
        <div className="login__left__section">
          <img src={logo} alt="logo" />
        </div>
        <div className="login__right__section">
          <h3>Welcome to the Fun Olympics</h3>
          <div className="login__form__section">
            <form>
              <div className="login__input__bar">
                <label htmlFor="">Email : </label><br />
                <SampleInput
                  placeHolder="Enter Your Email Here .."
                  name="email"
                  value={loginCredentials.email}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="login__input__bar">
                <label htmlFor="">Password : </label>
                <br />
                <SampleInput
                  placeHolder="Enter Your Password Here .."
                  name="password"
                  value={loginCredentials.password}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="login__btn">
                <SampleButton
                  title="login"
                  nameOfClass=""
                  handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                    loginHandler(e)
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
