import styled from "styled-components";

export default function grid({ children }) {
  const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return <Container>{children}</Container>;
}
