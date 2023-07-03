import React, { useContext, useState, useEffect } from "react";
import SampleButton from "../Components/Button/SampleButton";
import Title from "../Components/Title/Title";
import { fun, logo } from "../assets";
import { ActiveUserContext } from "../context/ActiveUser";
import { useSnackbar } from "notistack";

interface initialStateI {
  fullName?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  currentPassword?: string;
}

const initialState: initialStateI = {
  fullName: "",
  age: "",
  email: "",
};
const passwordState: initialStateI = {
  password: "",
  confirmPassword: "",
  currentPassword: "",
};
function Profile() {
  const { activeUser, setActiveUser } = useContext(ActiveUserContext);
  const [infoData, setInfoData] = useState<initialStateI>(initialState);
  const [passwordData, setPasswordData] =
    useState<initialStateI>(passwordState);
  const { enqueueSnackbar } = useSnackbar();
  const [isInfoChanged, setIsInfoChanged] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (
      name === "password" ||
      name === "confirmPassword" ||
      name === "currentPassword"
    ) {
      setPasswordData({ ...passwordData, [name]: value });
    } else {
      setInfoData({ ...infoData, [name]: value });
      setIsInfoChanged(true);
    }
  };
  useEffect(() => {
    setInfoData({
      fullName: activeUser?.fullName,
      age: activeUser?.age,
      email: activeUser?.email,
    });
  }, []);
  const infoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isInfoChanged) {
      setActiveUser({ ...activeUser!, ...infoData });
      enqueueSnackbar("information has been uploaded successfully", {
        variant: "success",
      });
      setIsInfoChanged(false);
    } else {
      enqueueSnackbar("Nothing has changed", {
        variant: "error",
      });
      setIsInfoChanged(false);
    }
  };
  const passwordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      (passwordData.password === "",
      passwordData.currentPassword === "" ||
        passwordData.confirmPassword === "")
    ) {
      enqueueSnackbar("Please Insert First. Thank you", {
        variant: "error",
      });
    } else {
      setActiveUser({ ...activeUser!, ...infoData });
      enqueueSnackbar("information has been uploaded successfully", {
        variant: "success",
      });
      setIsInfoChanged(false);
    }
  };

  console.log("active user : ", activeUser);
  return (
    <div className="profile__wrapper">
      <div className="container">
        <div className="profile__content">
          <div className="profile__section">
            <Title title="Edit Information" />
            <div className="account__information">
              <div className="form__input">
                <label htmlFor="">Full Name : </label>
                <br />
                <input
                  type="text"
                  name="fullName"
                  value={infoData?.fullName}
                  placeholder="Full Name ..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <div className="form__input">
                <label htmlFor="">Age : </label>
                <br />
                <input
                  type="text"
                  placeholder="Age ..."
                  name="age"
                  value={infoData?.age}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <div className="form__input">
                <label htmlFor="">Email : </label>
                <br />
                <input
                  type="text"
                  placeholder="Email ..."
                  name="email"
                  value={infoData?.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <SampleButton
                nameOfClass="mb-4"
                title="Update Information"
                handler={(e: React.MouseEvent<HTMLButtonElement>) => {
                  infoHandler(e);
                }}
              />
            </div>
          </div>

          <div className="profile__img__section">
            <img src={logo} alt="fun olympics" />
          </div>

          <div className="profile__section">
            <Title title="Update Password" />
            <div className="account__information">
              <div className="form__input">
                <label htmlFor="">Current Password : </label> <br />
                <input
                  type="text"
                  placeholder="Full Name ..."
                  name="currentPassword"
                  value={passwordData?.currentPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <div className="form__input">
                <label htmlFor="">New Password : </label>
                <br />
                <input
                  type="text"
                  placeholder="Age ..."
                  name="password"
                  value={passwordData?.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <div className="form__input">
                <label htmlFor="">Confirm New Password : </label>
                <br />
                <input
                  type="text"
                  placeholder="Age ..."
                  name="confirmPassword"
                  value={passwordData?.confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeHandler(e);
                  }}
                />
              </div>
              <SampleButton
                nameOfClass="mb-4"
                title="Change Password"
                handler={(e: React.MouseEvent<HTMLButtonElement>) => {
                  passwordHandler(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
