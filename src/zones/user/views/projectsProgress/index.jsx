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
      <Progress
        data={{
          title: "پروژه فضای سبز",
          content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها اهل ",
          value: 28,
        }}
      />
      <Progress
        data={{
          title: "طرح دریا",
          content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها اهل ",
          value: 80,
        }}
      />

      {open && <Send setreload={setreload} />}

      {data.length > 0 && <History />}
    </div>
  );
};
