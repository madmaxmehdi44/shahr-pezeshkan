import React, { useState } from "react";
// import Header from "components/header/header";
// import Navbar from "components/navbar/navbar";
// import { Route, Switch, Redirect } from "react-router-dom";
import //  routes, userRoutes,
// categoryList,
"routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
// import { mainColor } from "common";
// import Sidebar from "components/navbar/userSidebar"
// import { Select, Switch, Rate, InputNumber, Input } from "antd";
import Input from "components/input/input";

const Container = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
`;
// const Select = styled.select`
//   height: 34px;
//   border: 1px #a9a9a9 solid;
//   border-radius: 4px;
//   padding: 1px 12px;
//   font-size: 15px;
//   font-family: inherit;
//   outline: none;
//   width: 61%;
//   margin-bottom: 12px;
// `;

export default function App(props) {
  const [data, setData] = useState(props.data);
  const [errors, setErrors] = useState({});

  function submit() {
    const sendData = data;
    if (props.data.code === data.code) {
      delete sendData.code;
    }
    delete sendData.created_at;
    delete sendData.updated_at;
    console.log(sendData);
    Fetch.put(`/users/${data.id}`, sendData, (res) => {
      console.log(res);
      if (res.errors) {
        setErrors(res.errors);
        return;
      } else if (res[0].name) {
        //TODO : confirmLoading
        alert("با موفقیت اصلاح شد");
        setData(res[0]);
      }
      // window.location.reload();
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

      <button className="btn" onClick={submit}>
        اصلاح کاربر
      </button>
    </Container>
  );
}
