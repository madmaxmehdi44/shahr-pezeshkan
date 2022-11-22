import React from "react";
import { mainColor } from "common";
import { NavLink as Link } from "react-router-dom";
import { ReactComponent as BarsSvg } from "assets/icons/bars.svg";
import { routes } from "routes";
import styled from "styled-components";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 10px 0px #797979;
  align-items: center;
  background: ${mainColor};
  color: white;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 18px;
  &:hover {
    background: #cc672c;
    color: white;
  }
  @media (max-width: 1400px) {
    padding: 16px;

    font-size: 13px;
  }
`;
const Bars = styled(BarsSvg)`
  display: none;
  width: 28px;
  height: 28px;
  color: white;
  cursor: pointer;
  padding: 8px;
  @media (max-width: 900px) {
    display: block;
  }
`;

export default (props) => {
  const [open, setopen] = React.useState(
    window.innerWidth > 700 ? true : false
  );

  return (
    <Container>
      {window.innerWidth < 700 && <Bars onClick={() => setopen(!open)} />}
      {open &&
        routes.map((e, key) => {
          if (e.extension) {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    {e.data.map((item, itemKey) => (
                      <Menu.Item>
                        <NavItem
                          className="center"
                          exact
                          to={item.link}
                          activeStyle={activeStyle}
                          key={itemKey}
                        >
                          {item.name}
                        </NavItem>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomCenter"
                arrow
              >
                <div style={{ cursor: "pointer", padding: 15 }}>
                  {e.name} <DownOutlined />
                </div>
              </Dropdown>
            );
          }
          return (
            <NavItem exact to={e.link} activeStyle={activeStyle} key={key}>
              {e.name}
            </NavItem>
          );
        })}
    </Container>
  );
};

const activeStyle = {
  background: "#d15b16",
  color: "white",
};
