import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as userIcon } from "assets/icons/user.svg";
import { mainColor, apiAddress } from "common";
import { useHistory } from "react-router-dom";

const UserIcon = styled(userIcon)`
  width: 44px;
  height: 44px;
  color: ${mainColor};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 9px 28px -16px rgba(133, 133, 133, 0.9);
  padding: 64px 44px;
  border-radius: 12px;
  width: 50%;
  min-width: 220px;
  max-width: 480px;
`;
const Header = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin-top: 22px;
`;
const InputContainer = styled.div`
  padding: 4px 0;
  margin: 4px 0;
  & > label {
    width: 25%;
    text-align: start;
  }
`;
const Input = styled.input`
  height: 20px;
  border: none;
  background: #efefef;
  padding: 4px 10px;
  outline: none;
  border-radius: 3px;
`;
const Btn = styled.button`
  border: none;
  background: ${mainColor};
  padding: 9px 26px;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 16px;
  cursor: pointer;
`;

export default (props) => {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: null,
    password: null,
  });
  console.log(data);

  function PostRequest(props) {
    if (data.email !== "" && data.password !== "") {
    } else console.log("bad");
  }

  return (
    <div className="center" style={{ padding: "12vh 0" }}>
      <Container>
        <UserIcon />
        <Header>ناحیه کاربری</Header>
        <p style={{ marginBottom: 48 }}>
          ایمیل و رمز عبور خود را وارد کنید، سپس بر روی ورود کلیک کنید.
        </p>
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <InputContainer className="center">
            <label>ایمیل</label>
            <Input
              type="email"
              onchange={(e) => setData({ email: e.target.value })}
            />
            <span>{error.email && error.email}</span>
          </InputContainer>
          <InputContainer className="center">
            <label>رمز عبور</label>
            <Input
              type="password"
              onchange={(e) => setData({ password: e.target.value })}
            />
            <span>{error.password && error.password}</span>
          </InputContainer>
          <Btn> ورود</Btn>
          <p>
            هنوز اکانت نساخته اید؟ <a href="register">ثبت نام</a>.
          </p>
        </div>
      </Container>
    </div>
  );
};
