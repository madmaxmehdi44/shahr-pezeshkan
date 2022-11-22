import React, { useState } from "react";
import Input from "components/input/input";
import TextArea from "components/input/textarea";
import { categoryList } from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import { DatePicker } from "jalali-react-datepicker";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Select = styled.select`
  height: 34px;
  border: 1px #a9a9a9 solid;
  border-radius: 4px;
  padding: 1px 12px;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  width: 61%;
  margin-bottom: 12px;
`;
export default (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [plate, setPlate] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  function submit(props) {
    console.log(startDate);

    Fetch.post(
      "/guest",
      {
        fullname: title,
        description: content,
        code: code,
        plate: plate,
        data: JSON.stringify({
          user: { id: user.id, name: user.name, code: user.code },
        }),
        startDate: startDate.toISOString().slice(0, 19).replace("T", " "),
        endDate: endDate.toISOString().slice(0, 19).replace("T", " "),
      },
      (res) => {
        console.log(res);
        if (res.errors) {
          setErrors(res.errors);
          return;
        } else if (!res.fullname) {
          alert("خطایی رخ داده است");
        } else alert("با موفقیت ثبت شد");
        setTitle("");
        setContent("");
        setCode("");
        setPlate("");
      }
    );
  }
  return (
    <div>
      <h3>میهمان جدید</h3>
      <Container>
        <Input
          type="text"
          name="fullname"
          errors={errors}
          label="نام کامل"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          name="code"
          errors={errors}
          label="کد ملی"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Input
          type="text"
          name="plate"
          errors={errors}
          label="پلاک"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
        <TextArea
          type="text"
          name="description"
          errors={errors}
          label="توضیحات"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>زمان شروع</label>
        <DatePicker
          value={startDate}
          onClickSubmitButton={(e) => console.log(e)}
        />
        <label>زمان پایان</label>
        <DatePicker value={endDate} />

        <button className="btn" onClick={submit}>
          ثبت میهمان
        </button>
      </Container>
    </div>
  );
};
