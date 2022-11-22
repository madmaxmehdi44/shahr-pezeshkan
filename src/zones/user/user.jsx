import React from "react";
import {
  Route,
  Switch,
  // useHistory
} from "react-router-dom";
// import {
//   // routes, categoryList ,
//   userRoutes,
// } from "routes";
import styled from "styled-components";
import EditPage from "components/main/editPage";
import Sidebar from "components/navbar/userSidebar";
import { ReactComponent as PopSvg } from "assets/icons/popout.svg";
import { mainColor, url } from "common";
import { ReactComponent as PostManagerIcon } from "assets/icons/manager.svg";
import { ReactComponent as TicketIcon } from "assets/icons/ticket.svg";
import { ReactComponent as CoinIcon } from "assets/icons/coins.svg";
// import { ReactComponent as BlogIcon } from "assets/icons/blog.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as UserManagerIcon } from "assets/icons/user-manager.svg";
import { Link } from "react-router-dom";

import { userRoutes } from "routes";
export default () => {
  // const history = useHistory();

  // React.useEffect(() => {

  //   Fetch.post('/check', {}, (res) => {
  //     if (!res.ok) {
  //       alert('لطفا مجددا وارد شوید!')
  //       history.push("/");
  //     }
  //   })
  // }, ['input']);

  return (
    <Container>
      <Sidebar />
      <FakeSBContainer />

      <div style={{ width: "100%" }}>
        <Header>
          <h5>ناحیه کاربری</h5>
          <div className="row center">
            <ALink to={"/"} className="center">
              <PopSvg className="icon-sm" />
            </ALink>
            <Logout
              onClick={() => {
                localStorage.removeItem("__token");
                localStorage.removeItem("user");
                window.location.replace("/");
              }}
            >
              خروج
            </Logout>
          </div>
        </Header>
        <div
          style={{
            width: "100%",
            backgroundColor: "#edeff2",
            minHeight: "calc(100vh - 76px)",
            maxHeight: "calc(100vh - 76px)",
            overflow: "auto",
          }}
        >
          <Main>
            <Switch>
              {userRoutes.map((e, key) => (
                <Route
                  exact
                  path={`/dashboard/${e.slug}`}
                  component={e.component}
                  key={key}
                />
              ))}
              <Route
                exact
                path={`/dashboard/edit/:slug`}
                component={EditPage}
              />
            </Switch>
          </Main>
        </div>
      </div>
    </Container>
  );
};

const ALink = styled(Link)`
  background: ${mainColor};
  color: white;
  padding: 5px 14px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 8px;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  background-color: white;
  border-radius: 4px;
  min-height: 76px;
  max-height: 76px;
`;
const Logout = styled.h5`
  background: #b71616;
  color: white;
  padding: 5px 14px;
  border-radius: 3px;
  cursor: pointer;
`;

const Main = styled.main`
  padding: 16px;
  min-height: calc(100vh - 166px);
  background-color: white;
  overflow-y: auto;
  margin: 28px;
`;

const FakeSBContainer = styled.div`
  min-width: 220px;
  height: 100vh;
  border-radius: 45px 0 0;
  @media (max-width: 900px) {
    min-width: 56px;
  }
`;
