import React from "react";
import { routes } from "routes";
import { mainColor } from "common";
import { NavLink as Link } from "react-router-dom";
import { ReactComponent as BarsSvg } from "assets/icons/bars.svg";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${mainColor};
  box-shadow: 0 4px 10px 0px #797979;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 18px;
  &:hover {
    background: rgb(167 71 15);
  }
  @media (max-width: 1400px) {
    padding: 16px;

font-size:13px;  }
`;
const Bars = styled(BarsSvg)`
display:none;
width: 28px;
    height: 28px;
    color: white;
    cursor: pointer;
    padding: 8px;
    @media (max-width: 900px) {
display:block;
    }
`;

export default (props) => {
  const [open, setopen] = React.useState(window.innerWidth > 700 ? true : false);


  return (
    <Container style={{ background_color: mainColor }}>
      {window.innerWidth < 700 && <Bars onClick={() => setopen(!open)} />}
      {open && routes.map((e, key) => {
        return (
          <NavItem
            exact
            to={e.link}
            activeStyle={{
              background: "#d15b16",
            }}
            key={key}
          >
            {e.name}
          </NavItem>
        );
      })}
    </Container>
  );
};
