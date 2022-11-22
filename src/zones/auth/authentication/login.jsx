import React, { useState } from "react";
import styled from "styled-components";
import { mainColor } from "common";
import Fetch from "components/fetch/fetch";
import loginImage from "assets/login.jpeg";

export default (props) => {
  const [code, setcode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  function submit(e) {
    if (code !== "" && password !== "") {
      localStorage.removeItem("__token");
      localStorage.removeItem("user");
      Fetch.post(
        "/login",
        {
          code: code,
          password: password,
        },
        (res) => {
          if (res.token) {
            console.log(res);
            //set token to ls
            localStorage.setItem("__token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            window.location.replace("/dashboard");
          } else if (res.message === "bad creds") {
            alert("اطلاعات وارد شده اشتباه است!");
          }
        }
      );
    }
    e.preventDefault();
  }

  return (
    <div
      className="center"
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Container>
        <Header>ورود</Header>

        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
        >
          <InputContainer>
            <Label>کد ملی</Label>
            <Input type="number" onChange={(e) => setcode(e.target.value)} />
            <span>{error.code && error.code}</span>
          </InputContainer>
          <InputContainer>
            <Label>رمز عبور</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{error.password && error.password}</span>
          </InputContainer>
          <Btn onClick={submit}> ورود</Btn>
          <hr style={{ width: "80%", borderColor: "#676767" }} />
          <span style={{ color: "#dadada", textAlign: "center", fontSize: 14 }}>
            فراموشی رمز عبور
          </span>
        </form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 9px 28px -16px rgba(133, 133, 133, 0.9);
  padding: 32px 44px;
  border-radius: 12px;
  width: 50%;
  min-width: 220px;
  max-width: 390px;
  background: url(${loginImage}) #2d2c2c;
  color: white;
`;
const Header = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin: 40px 0;
  padding: 4px 10%;
  width: 80%;
  border-right: 5px solid ${mainColor};
  margin-bottom: 68px;
  color: inherit;
`;
const InputContainer = styled.div`
  margin-top: 6px;
`;
const Input = styled.input`
  height: 20px;
  width: 90%;
  border: none;
  background: #efefef;
  padding: 8px 5%;
  outline: none;
  border-radius: 32px;
  box-sizing: content-box;
  color: black;
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-right: 14px;
  color: inherit;
`;
const Btn = styled.button`
  height: 36px;
  width: 100%;
  border: none;
  background: ${mainColor};
  padding: 8px 14px;
  outline: none;
  border-radius: 32px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin: 32px 0;
  cursor: pointer;
`;
