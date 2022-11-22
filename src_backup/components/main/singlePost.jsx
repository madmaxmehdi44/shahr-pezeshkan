import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "components/main/loading";
import Fetch from "components/fetch/fetch";

const Container = styled.div`
  width: 65%;
  min-width: 300px;
  min-height: 400px;
  padding: 14px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 31%);
  margin: auto;
  border-radius: 0 0 14px 14px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function Post(props) {
  let { slug } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    Fetch.get(`/posts/${slug}`, (res) => {
      console.log(res);
      if (res) {
        setData(res);
      }
    });
  }, ["input"]);

  if (!data) return <Loading fullscreen={true} />;

  const date = new Date(data.created_at).toLocaleDateString("fa-IR");

  return (
    <Container>
      <h4>{data.title}</h4>

      <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
      <FooterContainer>
        <span>{date}</span>
      </FooterContainer>
    </Container>
  );
}
