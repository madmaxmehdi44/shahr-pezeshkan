import React from "react";
import { routes } from "routes";
import { mainColor } from "common";
import { NavLink as Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 10px 0px #797979;
  background: ${mainColor};

`;
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 21px;
  
`;

export default (props) => {
  return (
    <Container style={{ background_color: mainColor }}>
      {routes.map((e, key) => {
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
