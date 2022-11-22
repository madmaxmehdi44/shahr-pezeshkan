import styled from "styled-components";

export default function grid({ children }) {
  const Container = styled.main`
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    // gap: 18px;
    padding: 18px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    // @media (max-width: 1440px) {
    //   grid-template-columns: 1fr 1fr;
    // }
    // @media (max-width: 980px) {
    //   grid-template-columns: 1fr;
    // }
  `;
  return <Container>{children}</Container>;
}
