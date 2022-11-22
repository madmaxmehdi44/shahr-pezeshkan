import React, { useState, useEffect } from "react";
import { categoryList } from "routes";
import Fetch from "components/fetch/fetch";
import styled from "styled-components";
import UserCard from "components/main/userCard";
import NewUser from "./newUser";

const Container = styled.main`
  margin-top: 40px;
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

export default function App() {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(null);

  useEffect(() => {
    Fetch.get(`/users`, (res) => {
      if (res) {
        setData(res);
      }
    });
  }, [category]);

  return (
    <Container>
      <NewUser />

      <hr />
      <h4>لیست کاربران</h4>
      {data
        ? data.map((e, key) => {
            return <UserCard data={e} key={key} isdelete={true} />;
          })
        : "در حال بارگیری..."}
    </Container>
  );
}
