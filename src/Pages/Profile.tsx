import React, { useContext } from "react";
import SampleButton from "../Components/Button/SampleButton";
import Title from "../Components/Title/Title";
import { fun, logo } from "../assets";
import { ActiveUserContext } from "../context/ActiveUser";

function Profile() {
  const { activeUser, setActiveUser } = useContext(ActiveUserContext);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setActiveUser({...activeUser!,})
  };
  const infoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const passwordHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
                  value={activeUser?.fullName}
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
                  value={activeUser?.age}
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
                  value={activeUser?.email}
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
                <input type="text" placeholder="Full Name ..." />
              </div>
              <div className="form__input">
                <label htmlFor="">New Password : </label>
                <br />
                <input type="text" placeholder="Age ..." />
              </div>
              <div className="form__input">
                <label htmlFor="">Confirm New Password : </label>
                <br />
                <input type="text" placeholder="Age ..." />
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
