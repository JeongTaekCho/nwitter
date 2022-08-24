import React, { useEffect, useState } from "react";
import { authService, firebaseInstance } from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const socialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        //회원가입
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
        //로그인
      }
    } catch (error) {
      setError(error.message);
    }
    console.log(data);
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          required
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          vaule={password}
          required
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount === true ? "회원가입" : "로그인"}
        />
        {error}
        <span onClick={toggleAccount}>
          {newAccount === true ? "로그인" : "회원가입"}
        </span>
        <div>
          <button name="google" onClick={socialClick}>
            continued with Google
          </button>
          <button name="github" onClick={socialClick}>
            continued with Github
          </button>
        </div>
      </form>
    </>
  );
};

export default Auth;
