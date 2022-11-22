import React, { useState, useEffect } from "react";
import Fetch from "components/fetch/fetch";
import Post from "components/main/post";
import PostDetail from "components/main/postDetail";
import Grid from "components/containers/grid";
import styled from "styled-components";
import Loading from "components/main/loading";
import { mainColor } from "common";
export default (props) => {
  const [data, setdata] = useState("loading");
  const [single, setsingle] = useState(false);

  useEffect(() => {
    Fetch.get(`/conventions`, (res) => {
      if (res) setdata(res);
      console.log(res);
    });
  }, ["input"]);

  function onMore(data) {
    setsingle(data);
  }

  const History = () => (
    <div>
      <h4>صورتجلسات خصوصی</h4>
      <Grid>
        {/* {data &&
          data.map((e, key) => <Post key={key} data={e} onMore={onMore} />)} */}
        <Container>
          <h4>صورتجلسه خصوصی جدید</h4>

          <p>توضیحات صورتجلسه خصوصی به شرح زیر میباشد </p>
          <FooterContainer>
            <span>{"1400/2/26"}</span>
            <Link>ادامه مطلب</Link>
          </FooterContainer>
        </Container>{" "}
      </Grid>
    </div>
  );

  if (data === "loading") {
    return (
      <div style={{ marginTop: "35%" }}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {<History />}
      <h4>صورتجلسات عمومی</h4>

      {single && <PostDetail data={single} setsingle={setsingle} />}
    </div>
  );
};

const Container = styled.div`
  width: 380px;
  height: 260px;
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #b9b9b970;
  border-radius: 3px;
  margin: 12px;
  @media (max-width: 900px) {
    width: 280px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Link = styled.a`
  text-decoration: none;
  background: ${mainColor};
  padding: 2px 20%;
  color: white;
`;
