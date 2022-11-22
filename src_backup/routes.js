import {
  Home,
  News,
  Convention,
  Minutes,
  Decisions,
  Reports,
  Financial,
  Projects,
  Gallery,
  Contact,
} from "zones/main/views/index";
import {
  Dashboard,
  UserFinancial,
  NewPost,
  Ticket,
  PostManager,
  UserManager,
  UserMinutes,
  UserConvention,
  TownMates,
  Guests,
  ProjectsProgress,
} from "zones/user/views/index";
import Login from "zones/auth/authentication/login";
import Register from "zones/auth/authentication/register";

import { ReactComponent as PostManagerIcon } from "assets/icons/manager.svg";
import { ReactComponent as NewspaperIcon } from "assets/icons/newspaper.svg";
import { ReactComponent as TicketIcon } from "assets/icons/ticket.svg";
import { ReactComponent as CoinIcon } from "assets/icons/coins.svg";
import { ReactComponent as BlogIcon } from "assets/icons/blog.svg";
import { ReactComponent as UsersIcon } from "assets/icons/users.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as UserManagerIcon } from "assets/icons/user-manager.svg";
import { ReactComponent as MinutesIcon } from "assets/icons/minutes.svg";
import { ReactComponent as ShieldIcon } from "assets/icons/shield.svg";
import { ReactComponent as ProgressIcon } from "assets/icons/progress.svg";

export const categoryList = [
  {
    name: "news",
    rtlname: "اخبار شهرک",
  },
  {
    name: "convention",
    rtlname: "مجمع عمومی",
  },
  {
    name: "minutes",
    rtlname: "صورتجلسات",
  },
  {
    name: "decisions",
    rtlname: "تصمیمات هیات مدیره و مجمع",
  },
  {
    name: "reports",
    rtlname: "گزارشات مالی",
  },
  {
    name: "financial",
    rtlname: "صورت مالی",
  },
  {
    name: "projects",
    rtlname: "وضعیت پروژه ها",
  },
];
export const routes = [
  {
    name: "خانه",
    link: "/",
    component: Home,
  },
  {
    name: "اخبار شهرک",
    link: "/news",
    component: News,
  },
  {
    name: "مجمع عمومی",
    link: "/convention",
    component: Convention,
  },
  {
    name: "صورتجلسات",
    link: "/minutes",
    component: Minutes,
  },
  {
    name: "تصمیمات هیات مدیره و مجمع",
    link: "/decisions",
    component: Decisions,
  },
  {
    name: "گزارشات مالی",
    link: "/reports",
    component: Reports,
  },
  {
    name: "صورت مالی",
    link: "/financial",
    component: Financial,
  },
  {
    name: "وضعیت پروژه ها",
    link: "/projects",
    component: Projects,
  },
  {
    name: "گالری تصاویر شهرک",
    link: "/gallery",
    component: Gallery,
  },
  {
    name: "ارتباط با مدیریت",
    link: "/contact",
    component: Contact,
  },
];
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
  // {
  //   name: "مدیریت کاربران",
  //   slug: "user-manager",
  //   component: UserManager,
  //   icon: <UserManagerIcon className="icon-sm" />,
  // },
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
export const authRoutes = [
  {
    name: "ورود",
    link: "/login",
    component: Login,
  },
  {
    name: "ثبت نام",
    link: "/register",
    component: Register,
  },
];
export const adminRoutes = [
  {
    name: "خانه",
    link: "/",
    component: Home,
  },
];
