import React from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const onLogout = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Profile;
