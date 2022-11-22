import React, { useState, useEffect } from "react";
import { categoryList } from "routes";
import Fetch from "components/fetch/fetch";
import Post from "components/main/postEdit";
import styled from "styled-components";
import Grid from "components/containers/grid";

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
  console.log(`/posts/${category}`);
  useEffect(() => {
    Fetch.get(
      category === "all" ? "/posts" : `/posts/category/${category}`,
      (res) => {
        console.log(res);
        if (res) {
          console.log(res);
          setData(res);
        }
      }
    );
  }, [category]);

  return (
    <Container>
      <label>دسته بندی</label>

      <Select
        name=""
        id=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">همه</option>
        {categoryList.map((e, key) => {
          return (
            <option value={e.name} key={key}>
              {e.rtlname}
            </option>
          );
        })}
      </Select>
      <Grid>
        {data
          ? data.map((e, key) => {
              return <Post data={e} key={key} />;
            })
          : "در حال بارگیری...."}
      </Grid>
    </Container>
  );
}
