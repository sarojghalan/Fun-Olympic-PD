import React, { useState } from "react";
import { logo } from "../../assets";
import SampleButton from "../../Components/Button/SampleButton";
import SampleInput from "../../Components/Input/SampleInput";
import { RegisterI } from "../../Interface/Auth/RegisterInterface";
import "../../Scss/Main.scss";
function Register() {
  const credentials: RegisterI = {
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [registerCredentials, setregisterCreddentials] =
    useState<RegisterI>(credentials);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("targeted value : ", e.target.value);
  };

  const RegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  console.log(typeof registerCredentials.age);

  return (
    <div className="container">
      <div className="register__wrapper">
        <div className="register__left__section">
          <img src={logo} alt="logo" />
        </div>
        <div className="register__right__section">
          <h3>Welcome to the Fun Olympics</h3>
          <div className="register__form__section">
            <form>
              <div className="register__input__bar">
                <label htmlFor="">Full Name : </label>
                <br />
                <SampleInput
                  type="text"
                  placeHolder="Enter Full Name Here .."
                  name="fullName"
                  value={registerCredentials.fullName}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="register__input__bar">
                <label htmlFor="">Email : </label>
                <br />
                <SampleInput
                  type="email"
                  placeHolder="Enter Email Here .."
                  name="email"
                  value={registerCredentials.email}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="register__input__bar">
                <label htmlFor="">Age : </label>
                <br />
                <SampleInput
                  type="text"
                  placeHolder="Enter Email Here .."
                  name="email"
                  value={registerCredentials.age}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              {/* <div className="register__input__bar">
                <label htmlFor="">Age : </label>
                <br />
                <SampleInput
                  type="text"
                  placeHolder="Enter Your Age Here .."
                  name="age"
                  value={registerCredentials.age}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div> */}
              <div className="register__input__bar">
                <label htmlFor="">Password : </label>
                <br />
                <SampleInput
                  type="text"
                  placeHolder="Enter Password Here .."
                  name="password"
                  value={registerCredentials.password}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="register__input__bar">
                <label htmlFor="">Confirm Password : </label>
                <br />
                <SampleInput
                  type="text"
                  placeHolder="Enter Confirm Password Here .."
                  name="confirmPassword"
                  value={registerCredentials.confirmPassword}
                  onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputHandler(e)
                  }
                />
              </div>
              <div className="register__btn">
                <SampleButton
                  title="register"
                  nameOfClass=""
                  handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                    RegisterHandler(e)
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

export default Register;
