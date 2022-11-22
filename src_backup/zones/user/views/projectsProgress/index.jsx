import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import Send from "./send";
import Grid from "components/containers/grid";
import Loading from "components/main/loading";
import TrackVisibility from "react-on-screen";

import { mainColor } from "common";
import { Line, Circle } from "rc-progress";
import Progress from "./progress";

export default (props) => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(false);
  const [single, setsingle] = useState(false);
  const [loaded, setloaded] = useState(false);
  const [reload, setreload] = useState(false);
  useEffect(() => {
    Fetch.get(`/progress`, (res) => {
      if (res) setdata(res);
      console.log(res);
    });

    return () => {
      setreload(false);
    };
  }, [reload]);

  function onMore(data) {
    setsingle(data);
  }

  const Single = ({ data, isVisible }) => {
    var newData = data;
    console.log(isVisible);
    newData.value = !isVisible && 0;
    console.log(newData);

    return <Progress data={data} />;
  };

  const History = () => {
    if (reload) <Loading />;

    return (
      <div>
        <hr />
        <h4>پروژه های اضافه شده</h4>
        <div>
          {data &&
            data.map((e, key) => (
              <TrackVisibility>
                <Progress data={e} key={key} />
              </TrackVisibility>
            ))}
        </div>
      </div>
    );
  };

  if (data.length < 1) {
    return (
      <div>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? "X" : " اضافه کردن وضعیت"}
        </button>
        {open && <Send setreload={setreload} />}
      </div>
    );
  }

  return (
    <div>
      <button className="btn" onClick={() => setOpen(!open)}>
        {open ? "X" : " اضافه کردن وضعیت"}
      </button>
      {open && <Send setreload={setreload} />}

      {data.length > 0 && <History />}
    </div>
  );
};
