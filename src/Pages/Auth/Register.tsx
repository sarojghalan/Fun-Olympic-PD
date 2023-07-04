import React, { useState, useContext } from "react";
import { logo } from "../../assets";
import SampleButton from "../../Components/Button/SampleButton";
import SampleInput from "../../Components/Input/SampleInput";
import { RegisterI } from "../../Interface/Auth/RegisterInterface";
import "../../Scss/Main.scss";
import { UserContext } from "../../context/UserContext";
import { useSnackbar } from "notistack";
import { useNavigate , NavLink} from "react-router-dom";

function Register() {
  const { isLoading, setIsLoading, user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const credentials: RegisterI = {
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { enqueueSnackbar } = useSnackbar();

  const [registerCredentials, setregisterCreddentials] =
    useState<RegisterI>(credentials);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setregisterCreddentials({
      ...registerCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const findEmail = user?.find(
      (item) => item.email === registerCredentials.email
    );
    setIsLoading(true);
    if (
      registerCredentials.fullName === "" ||
      registerCredentials.email === "" ||
      registerCredentials.age === "" ||
      registerCredentials.password === "" ||
      registerCredentials.confirmPassword === ""
    ) {
      enqueueSnackbar("Empty field detected .", { variant: "error" });
    } else if (
      registerCredentials.password !== registerCredentials.confirmPassword
    ) {
      enqueueSnackbar("Password and Confirm Password must be same.", {
        variant: "error",
      });
      setIsLoading(false);
    } else if (findEmail) {
      enqueueSnackbar("Provided email has been already registered", {
        variant: "error",
      });
      setIsLoading(false);
    } else {
      if (user === null) {
        setUser([{ ...registerCredentials }]);
        navigate("/login");
      } else {
        setUser([...user, registerCredentials]);
        navigate("/login");
      }
      enqueueSnackbar("You have been successfully registerd.", {
        variant: "success",
      });
      setregisterCreddentials(credentials);
      setIsLoading(false);
    }
  };

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
                  name="age"
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
                  type="password"
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
                  type="password"
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
          <div className="admin__login">
              <NavLink to='/admin'>
              <p>Back to Login ?</p>
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
