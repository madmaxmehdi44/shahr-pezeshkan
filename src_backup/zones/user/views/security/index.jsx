import React, { useState } from "react";
import Input from 'components/input/input'
import TextArea from 'components/input/textarea'
import { categoryList } from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch"
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
outline:none;
width: 61%;
margin-bottom:12px;
`;
export default (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDate, setstartDate] = useState('news');
  const [endDate, setendDate] = useState('news');
  const [errors, setErrors] = useState({});


  function submit(props) {
    Fetch.post("/guest", {
      "fullname": title,
      "description": content,
      "startDate": startDate,
      "endDate": endDate
    }, (res) => {
      console.log(res);
      if (res.errors) {
        setErrors(res.errors);
        return;
      }
      else if (!res.fullname) { alert('خطایی رخ داده است') }
      else alert('با موفقیت اضافه شد')
      setTitle("");
      setContent("");
    })
  }
  return (<div>   <h3>
    میهمان جدید
  </h3>

    <Container>
      <Input type="text"
        name="fullname" errors={errors} label="نام کامل" value={title} setValue={setTitle} />
      <TextArea type="text"
        name="description" errors={errors} label="توضیحات" value={content} setValue={setContent} />


      <label>زمان شروع</label>
      <DatePicker />
      <label>زمان پایان</label>
      <DatePicker />

      <button className="btn" onClick={submit}>ثبت میهمان</button>
    </Container></div>)

}
