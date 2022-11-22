import React, { useState, useEffect } from "react";
import Input from "components/input/input";
import { categoryList } from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import Send from "./send";
import Ticket from "components/main/ticket";
import Grid from "components/containers/grid";

export default (props) => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    Fetch.get(`/ticket/${user.id}`, (res) => {
      if (res) setSent(res);
      console.log(res);
    });
  }, ["input"]);

  const History = () => (
    <div>
      <hr />
      <h4>تاریخچه</h4>
      <Grid>{sent && sent.map((e, key) => <Ticket key={key} data={e} />)}</Grid>
    </div>
  );

  if (sent.length < 1) {
    return (
      <div>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "X" : "ارسال تیکت"}
        </button>
        {open && <Send />}
      </div>
    );
  }

  return (
    <div>
      <button className="btn" onClick={() => setOpen(!open)}>
        {open ? "X" : "ارسال تیکت"}
      </button>
      {open && <Send />}

      {sent.length > 0 && <History />}
    </div>
  );
};
