import React from "react";
import { userRoutes } from "routes";
import { mainColor } from "common";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { Menu, Avatar } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0 8px 2px rgb(230 247 255 / 65%);
  min-width: 220px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  direction: ltr;
  @media (max-width: 900px) {
    min-width: 56px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
`;
const Title = styled.span`
  @media (max-width: 900px) {
    display: none;
  }
`;
const NavItem = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 21px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 900px) {
  }
`;

const Header = styled.div`
  text-decoration: none;
  padding: 21px;
  text-align: center;
  font-size: 14px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container style={{ background_color: mainColor }}>
      <div className="center" style={{ padding: "12px 0" }}>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <Header>خوش امدید {user && user.fullname}</Header>

      {userRoutes.map((e, key) => {
        return (
          <NavItem
            exact
            to={`/dashboard/${e.slug}`}
            activeStyle={{
              borderLeft: "2px solid #1890ff",
              backgroundColor: "#e6f7ff",
              color: "#1890ff",
              borderRadius: 2,
              transition: ".6s all ease-in-out",
            }}
            dir="rtl"
            key={key}
          >
            {e.icon}
            <Title style={{ paddingRight: 10 }}>{e.name}</Title>
          </NavItem>
        );
      })}
    </Container>
  );
};
