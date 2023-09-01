import React from "react";
import "../assets/styles/pages/Profile.scss";
import ProfileNavbar from "../components/ProfileNavbar";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("Data"));
  console.log(data);
  return (
    <>
      <ProfileNavbar />
      <section id="profile-section">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ebK9rMwNLRxCp3uanMEUqTQjCVCVtXxcwQ&usqp=CAU"
          alt=""
        />
        <div>
          <p className="name">{data?.name}</p>
          <p className="email">{data?.email}</p>
          <p className="phone">{data?.phone}</p>
        </div>
      </section>
    </>
  );
};

export default Profile;
