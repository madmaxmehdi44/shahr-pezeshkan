import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as userIcon } from "assets/icons/user.svg";
import { mainColor,apiAddress } from "common";
import { useHistory } from "react-router-dom";
import Fetch from "components/fetch/fetch"
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
const initial = {
  fullname: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};
export default (props) => {
  const history = useHistory();

  const [data, setData] = useState(initial);
  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  function PostRequest(props) {
    console.log(data);
    alert('امکان دسترسی وجود ندارد')

    // Fetch.post("/register", {})


    // if (data.email !== "" && data.password !== "") {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: JSON.stringify(data),
    //     redirect: "follow",
    //   };

    //   fetch(`${apiAddress}/users/create.php`, requestOptions)
    //     .then((response) => response.text())
    //     .then((response) => JSON.parse(response))
    //     .then((res) => {
    //       if (res.error) {
    //         alert(res.error);
    //       } else {
    //         alert(res.ok);
    //         history.push("/dashboard");
    //       }
    //     })
    //     .catch((error) => console.log("error", error));
    // } else console.log("bad");
  }

  return (
    <div className="center" style={{ padding: "12vh 0" }}>
      <Container>
        <UserIcon />
        <Header>ثبت نام</Header>
        {/* <p style={{ marginBottom: 48 }}>
          ایمیل و رمز عبور خود را وارد کنید، سپس بر روی ورود کلیک کنید.
        </p> */}
        <form
          style={{ display: "flex", flexDirection: "column", width: "70%" }}
        >
          <InputContainer className="center">
            <label>نام کامل</label>
            <Input
              type="text"
              name="fullname"
              value={data.fullname}
              onChange={handleInputChange}
            />
            <span>{error.fullname && error.fullname}</span>
          </InputContainer>
          <InputContainer className="center">
            <label>ایمیل</label>
            <Input type="email" name="email" onChange={handleInputChange} />
            <span>{error.email && error.email}</span>
          </InputContainer>

          <InputContainer className="center">
            <label>آدرس</label>
            <Input type="text" name="address" onChange={handleInputChange} />
            <span>{error.address && error.address}</span>
          </InputContainer>
          <InputContainer className="center">
            <label>رمز عبور</label>
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
            <span>{error.password && error.password}</span>
          </InputContainer>
          <InputContainer className="center">
            <label>تلفن</label>
            <Input type="text" name="phone" onChange={handleInputChange} />
            <span>{error.phone && error.phone}</span>
          </InputContainer>
          <Btn type="button" onClick={PostRequest}>
            ورود
          </Btn>
          <p>
            اکانت ساخته اید؟ <a href="login">ورود</a>.
          </p>
        </form>
      </Container>
    </div>
  );
};
