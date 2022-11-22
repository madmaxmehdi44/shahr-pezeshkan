import React from "react";
import { ReactComponent as SearchSvg } from "assets/icons/Search.svg";
import { ReactComponent as LocationSvg } from "assets/icons/location.svg";
import { ReactComponent as UserSvg } from "assets/icons/user.svg";
import Social from "./soical";
import { mainColor } from "common";
import { Link, useHistory } from "react-router-dom";
import Fetch from "components/fetch/fetch";
import Loading from "components/main/loading";
export default (props) => {
  const history = useHistory();
  const [user, setUser] = React.useState("loading");
  React.useEffect(() => {
    Fetch.check((e) =>
      e ? setUser(JSON.parse(localStorage.getItem("user"))) : setUser(false)
    );
  }, []);

  function search() {
    alert("//TODO search");
  }
  function login() {
    Fetch.check((e) =>
      e ? history.push("/dashboard") : history.push("/auth/login")
    );
  }

  function UserContainer() {
    if (user === "loading") {
      return (
        <div className="column" style={{ cursor: "not-allowed" }}>
          <UserSvg className="icon" />
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="column">
          <UserSvg className="icon" />
          <span>{user ? user.name : "ورود کاربران"}</span>
        </div>
      );
    }
  }

  return (
    <header id="header">
      <Link to="/" className="column" style={{ textDecoration: "none" }}>
        <span style={{ color: mainColor }}>شهرک پزشکان ایزدشهر</span>
        <span style={{ marginTop: 7 }}>
          <span style={{ color: mainColor, paddingRight: 4 }}>PEZESHKAN</span>
          <span style={{ color: "#777777", fontWeight: 400 }}>COMPLEX</span>
        </span>
      </Link>
      <div style={{ flexDirection: "row" }}>
        <LocationSvg className="icon" style={{ marginLeft: 4 }} />
        <a
          style={{
            textDecoration: "none",
            color: "black",
          }}
          target="_blank"
          href="https://goo.gl/maps/YvqgHr5mNNvUjfKEA"
        >
          نقشه گوگل شهرک
        </a>
      </div>
      <div style={{ color: "#d15b16" }}>اخبار فوری شهرک پزشکان </div>
      <div>
        <div className="searchbox" style={{ marginBottom: 7 }}>
          <input
            type="text"
            placeholder="جستجو..."
            onKeyDown={(e) => {
              if (e.key === "Enter") search();
            }}
          />
          <SearchSvg
            className="icon-sm"
            style={{ cursor: "pointer" }}
            onClick={search}
          />
        </div>
        <Social />
      </div>
      <div
        onClick={login}
        className="column"
        style={{
          width: "144px",
          textDecoration: "none",
          color: mainColor,
          cursor: "pointer",
        }}
      >
        <UserContainer />
      </div>
    </header>
  );
};
