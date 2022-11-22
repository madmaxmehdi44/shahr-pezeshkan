import React, { useState } from "react";
import Header from "components/header/header";
import Navbar from "components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Input from "components/input/input";
import { routes, userRoutes, categoryList } from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: {
        name: "",
        fathers_name: "",
        id_code: "",
        id_city: "",
        code: "",
        birth: "",
        phone: "",
        postal_code: "",
        password: "",
      },
      errors: {},
    };
  }

  componentDidMount() {
    Fetch.get(`/posts/category/${this.props.title}`, (res) => {
      console.log(res);
      if (res) {
        this.setState({ data: res });
      }
    });
  }

  submit(props) {
    Fetch.post(
      "/register",
      {
        name: this.name,
        fathers_name: this.fathers_name,
        id_code: this.id_code,
        id_city: this.id_city,
        code: this.code,
        birth: this.birth,
        phone: this.phone,
        postal_code: this.postal_code,
        password: this.password,
      },
      (res) => {
        if (res.errors) {
          this.setState({ errors: res.errors });
          return;
        } else alert("با موفقیت اضافه شد");
        this.setState({ data: {} });
        // window.location.reload();
      }
    );
  }

  render() {
    return (
      <div>
        <h4>اضافه کردن کاربر</h4>
        <Container>
          <Input
            type="text"
            name="name"
            errors={this.state.errors}
            label="نام کامل"
            value={this.state.data.name}
            onChange={this.handleInput}
          />
          <Input
            type="text"
            name="fathers_name"
            errors={this.state.errors}
            label="نام پدر"
            value={this.state.data.fathers_name}
            onChange={this.handleInput}
          />
          <Input
            type="number"
            name="id_code"
            errors={this.state.errors}
            label="شماره شناسنامه"
            value={this.state.data.id_code}
            onChange={this.handleInput}
          />
          <Input
            type="text"
            name="id_city"
            errors={this.state.errors}
            label="محل صدور"
            value={this.state.data.id_city}
            onChange={this.handleInput}
          />
          <Input
            type="number"
            name="code"
            errors={this.state.errors}
            label="کد ملی"
            value={this.state.data.code}
            onChange={this.handleInput}
          />
          <Input
            type="text"
            name="birth"
            errors={this.state.errors}
            label="تاریخ تولد"
            value={this.state.data.birth}
            onChange={this.handleInput}
          />
          <Input
            type="number"
            name="phone"
            errors={this.state.errors}
            label="تلفن"
            value={this.state.data.phone}
            onChange={this.handleInput}
          />
          <Input
            type="text"
            name="postal_code"
            errors={this.state.errors}
            label="کد پستی"
            value={this.state.data.postal_code}
            onChange={this.handleInput}
          />
          <Input
            type="password"
            name="password"
            errors={this.state.errors}
            label="رمز عبور"
            value={this.state.data.password}
            onChange={this.handleInput}
          />

          <button className="btn" onClick={this.submit}>
            اضافه کردن کاربر
          </button>
        </Container>
      </div>
    );
  }
}
