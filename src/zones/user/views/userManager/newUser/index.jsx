import React, { useState } from "react";
// import Header from "components/header/header";
// import Navbar from "components/navbar/navbar";
// import { Route, Switch, Redirect } from "react-router-dom";
import Input from "components/input/input";
// import { Switch } from "antd";
import //  routes, userRoutes,
// categoryList,
"routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
// import { mainColor } from "common";
// import Sidebar from "components/navbar/userSidebar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;
const Select = styled.select`
  height: 34px;
  border: 1px #a9a9a9 solid;
  border-radius: 4px;
  padding: 1px 12px;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  width: 61%;
  margin-bottom: 12px;
`;
export default (props) => {
  const [data, setData] = useState({
    name: "",
    fathers_name: "",
    id_code: "",
    id_city: "",
    code: "",
    birth: "",
    phone: "",
    postal_code: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function submit(props) {
    Fetch.post("/register", data, (res) => {
      console.log(res);
      if (res.errors) {
        setErrors(res.errors);
        return;
      } else alert("با موفقیت اضافه شد");
      setData({
        name: "",
        fathers_name: "",
        plate: "",
        email: "",
        id_code: "",
        id_city: "",
        code: "",
        birth: "",
        phone: "",
        postal_code: "",
        password: "",
      });
    });
  }

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Container>
      <h3>اضافه کردن کاربر</h3>

      <Input
        type="text"
        name="name"
        errors={errors}
        label="نام کامل"
        value={data.name}
        onChange={handleInput}
      />
      <Input
        type="text"
        name="fathers_name"
        errors={errors}
        label="نام پدر"
        value={data.fathers_name}
        onChange={handleInput}
      />

      <Input
        type="number"
        name="code"
        errors={errors}
        label="کد ملی"
        value={data.code}
        onChange={handleInput}
      />
      <Input
        type="number"
        name="id_code"
        errors={errors}
        label="شماره شناسنامه"
        value={data.id_code}
        onChange={handleInput}
      />
      <Input
        type="text"
        name="id_city"
        errors={errors}
        label="محل صدور"
        value={data.id_city}
        onChange={handleInput}
      />

      <Input
        type="text"
        name="birth"
        errors={errors}
        label="تاریخ تولد"
        value={data.birth}
        onChange={handleInput}
      />
      <Input
        type="email"
        name="email"
        errors={errors}
        label="ایمیل"
        value={data.email}
        onChange={handleInput}
      />
      <Input
        type="number"
        name="phone"
        errors={errors}
        label="تلفن"
        value={data.phone}
        onChange={handleInput}
      />
      <Input
        type="text"
        name="postal_code"
        errors={errors}
        label="کد پستی"
        value={data.postal_code}
        onChange={handleInput}
      />
      <Input
        type="text"
        name="plate"
        errors={errors}
        label="پلاک"
        value={data.plate}
        onChange={handleInput}
      />
      <Input
        type="password"
        name="password"
        errors={errors}
        label="رمز عبور"
        value={data.password}
        onChange={handleInput}
      />
      <button className="btn" onClick={submit}>
        اضافه کردن کاربر
      </button>
    </Container>
  );
};
