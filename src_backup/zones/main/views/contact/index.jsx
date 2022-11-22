import React from "react";
import styled from "styled-components";
import Social from "components/header/soical";
import st from "assets/Statute.pdf";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;
const Item = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.62);
  margin: 8px;
  border-radius: 3px;
  padding-bottom: 10px;
`;

export default (props) => {
  return (
    <Container>
      <ItemContainer>
        <Item>
          <h5>آدرس</h5>
          <address>آدرس: ایران</address>
        </Item>
        <Item>
          <h4>تلفن</h4>
          <phone>+98xxxxxxx</phone>
        </Item>
        <Item>
          <h4>ایمیل</h4>
          <email>mail@domain.com</email>
        </Item>
      </ItemContainer>
      <h5 style={{ marginTop: 48 }}>شبکه های اجتماعی :</h5>
      <Social />
      <a href={st} download style={{ marginTop: 48, fontVariant: "italic" }}>
        اساسنامه شهرک پزشکان
      </a>
    </Container>
  );
};
