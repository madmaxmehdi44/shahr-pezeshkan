import React from "react";
import App from "components/model/model";

export default (props) => {
  return (
    <div>
      <App title="minutes" />
      <p>
        {" "}
        برای مشاهده صورت جلسات خصوصی <a href="/auth/login">وارد شوید</a>
      </p>
    </div>
  );
};
