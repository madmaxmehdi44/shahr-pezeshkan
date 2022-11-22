import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import Send from "./send";
import Post from "components/main/post";
import PostDetail from "components/main/postDetail";
import Grid from "components/containers/grid";

export default (props) => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(false);
  const [single, setsingle] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    Fetch.get(`/minutes`, (res) => {
      if (res) setdata(res);
      console.log(res);
    });
  }, ["input"]);

  function onMore(data) {
    setsingle(data);
  }

  const History = () => (
    <div>
      <hr />
      <h4>پست های مجمع</h4>
      <Grid>
        {data &&
          data.map((e, key) => <Post key={key} data={e} onMore={onMore} />)}
      </Grid>
    </div>
  );

  if (data.length < 1) {
    return (
      <div>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "X" : "اضافه کردن پست"}
        </button>
        {open && <Send />}
      </div>
    );
  }

  return (
    <div>
      <button className="btn" onClick={() => setOpen(!open)}>
        {open ? "X" : "اضافه کردن پست"}
      </button>
      {open && <Send />}

      {data.length > 0 && <History />}
      {single && <PostDetail data={single} setsingle={setsingle} />}
    </div>
  );
};
