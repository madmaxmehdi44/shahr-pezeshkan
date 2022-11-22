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
import { ReactComponent as NewspaperIcon } from "assets/icons/newspaper.svg";
import { ReactComponent as TicketIcon } from "assets/icons/ticket.svg";
import { ReactComponent as CoinIcon } from "assets/icons/coins.svg";
// import { ReactComponent as BlogIcon } from "assets/icons/blog.svg";
import { ReactComponent as UsersIcon } from "assets/icons/users.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as UserManagerIcon } from "assets/icons/user-manager.svg";
import { ReactComponent as MinutesIcon } from "assets/icons/minutes.svg";
import { ReactComponent as ShieldIcon } from "assets/icons/shield.svg";
import { ReactComponent as ProgressIcon } from "assets/icons/progress.svg";

import {
  Dashboard,
  UserFinancial,
  NewPost,
  Ticket,
  PostManager,
  UserManager,
  UserMinutes,
  UserConvention,
  Guests,
  ProjectsProgress,
  TownMates,
} from "zones/user/views/index";

export const userRoutes = [
  {
    name: "داشبورد",
    slug: "",
    component: Dashboard,
    icon: <HomeIcon className="icon-sm" />,
  },
  {
    name: "پست جدید",
    slug: "new-post",
    component: NewPost,
    icon: <NewspaperIcon className="icon-sm" />,
  },
  {
    name: "مالی",
    slug: "financial",
    component: UserFinancial,
    icon: <CoinIcon className="icon-sm" />,
  },
  {
    name: "تیکت",
    slug: "ticket",
    component: Ticket,
    icon: <TicketIcon className="icon-sm" />,
  },
  {
    name: "مدیریت پست ها",
    slug: "post-manager",
    component: PostManager,
    icon: <PostManagerIcon className="icon-sm" />,
  },
  {
    name: "مدیریت کاربران",
    slug: "user-manager",
    component: UserManager,
    icon: <UserManagerIcon className="icon-sm" />,
  },
  {
    name: "مجمع عمومی",
    slug: "convention",
    component: UserConvention,
    icon: <UsersIcon className="icon-sm" />,
  },
  {
    name: "صورتجلسات",
    slug: "minutes",
    component: UserMinutes,
    icon: <MinutesIcon className="icon-sm" />,
  },
  {
    name: "وضعیت پروژه ها",
    slug: "projects-progress",
    component: ProjectsProgress,
    icon: <ProgressIcon className="icon-sm" />,
  },
  {
    name: "همسایه ها",
    slug: "neighbors",
    component: TownMates,
    icon: <UsersIcon className="icon-sm" />,
  },
  {
    name: "نگهبانی",
    slug: "guests",
    component: Guests,
    icon: <ShieldIcon className="icon-sm" />,
  },
];
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

      <Main>
        <Header>
          <h5>ناحیه کاربری</h5>
          <div className="row center">
            <ALink href={"/"} target="_blank" className="center">
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
        <Switch>
          {userRoutes.map((e, key) => (
            <Route
              exact
              path={`/dashboard/${e.slug}`}
              component={e.component}
              key={key}
            />
          ))}
          <Route exact path={`/dashboard/edit/:slug`} component={EditPage} />
        </Switch>
      </Main>
    </Container>
  );
};

const ALink = styled.a`
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
  padding: 0 12px;
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
  min-height: calc(100vh - 32px);
  width: 100%;
`;

const FakeSBContainer = styled.div`
  min-width: 220px;
  height: 100vh;
  border-radius: 45px 0 0;
  @media (max-width: 900px) {
    min-width: 56px;
  }
`;
