import React from "react";
import telegram from "assets/icons/telegram.png";
import instagram from "assets/icons/instagram.png";
import facebook from "assets/icons/facebook.png";
import twitter from "assets/icons/twitter.png";
import googleplus from "assets/icons/googleplus.png";
export default (props) => {
  const items = [
    {
      icon: telegram,
      name: "telegram",
      link: "",
    },
    {
      icon: instagram,
      name: "instagram",
      link: "",
    },
    {
      icon: facebook,
      name: "facebook",
      link: "",
    },
    {
      icon: twitter,
      name: "twitter",
      link: "",
    },
    {
      icon: googleplus,
      name: "googleplus",
      link: "",
    },
  ];
  return (
    <div>
      {items.map((e, key) => (
        <a href={e.link} key={key}>
          <img src={e.icon} alt={e.name} />
        </a>
      ))}
    </div>
  );
};
