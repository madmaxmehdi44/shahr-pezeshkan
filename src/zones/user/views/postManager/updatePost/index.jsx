import React, { useState } from "react";
// import Header from "components/header/header";
// import Navbar from "components/navbar/navbar";
// import { Route, Switch, Redirect } from "react-router-dom";
import {
  //  routes, userRoutes,
  categoryList,
} from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  // convertFromHTML,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { mainColor } from "common";
// import Sidebar from "components/navbar/userSidebar"
import {
  Select,
  // Switch, Rate, InputNumber,
  Input,
} from "antd";
import htmlToDraft from "html-to-draftjs";
const user = JSON.parse(localStorage.getItem("user"));

const Container = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
`;
// const Select = styled.select`
//   height: 34px;
//   border: 1px #a9a9a9 solid;
//   border-radius: 4px;
//   padding: 1px 12px;
//   font-size: 15px;
//   font-family: inherit;
//   outline: none;
//   width: 61%;
//   margin-bottom: 12px;
// `;

export default function App(props) {
  console.log("props", props.data);
  const [data, setData] = useState(() => {
    const contentBlock = htmlToDraft(props.data.content);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );

      const editorState = EditorState.createWithContent(contentState);
      return {
        ...props.data,
        // category: category,
        content: editorState,
      };
    } else {
      alert("خطایی در بارگیری توضیحات رخ داده است");
      return {
        ...props.data,
        conent: EditorState.createEmpty(),
      };
    }
  });

  const [errors, setErrors] = useState({});
  const getHtml = () =>
    draftToHtml(convertToRaw(data && data.content.getCurrentContent()));

  function GenerateSlug() {
    if (!data.title) {
      alert("لطفا عنوان را وارد کنید!");
      return;
    }

    let temp = data.title.replace(/\s+/g, "-").toLowerCase();
    temp.trim();

    let result = temp.match(
      /[a-z0-9\u0600-\u06FF]+(?:-[a-z0-9\u0600-\u06FF]+)*$/g
    );

    if (result) {
      setData({ ...data, slug: result[0] });
    } else alert("خطایی رخ داده! لطفا url را تایپ کنید");
  }
  function submit() {
    const sendData = {
      title: data.title,
      slug: data.slug,
      content: getHtml(),
      category: data.category,
      data: JSON.stringify(data.data),
      author: user.name,
      // category: `#${data.category.join("#")}`,
    };
    console.log("sendData", sendData);
    Fetch.put(`/posts/${props.data.id}`, sendData, (res) => {
      console.log(res);
      if (res.errors) {
        setErrors(res.errors);
        return;
      } else if (res.trace) {
        alert("خطا");
      } else {
        //TODO : confirmLoading
        alert("با موفقیت آپدیت شد");
        window.location.reload();
      }
    });
  }
  return (
    <Container>
      <label> عنوان</label>

      <Input
        style={{
          width: "60%",
          minWidth: "200px",
          maxWidth: "265px",
          margin: "6px 0 15px 0",
        }}
        type="text"
        name="title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <label>url عنوان</label>
      <Input
        style={{
          width: "60%",
          minWidth: "200px",
          maxWidth: "265px",
          margin: "6px 0 15px 0",
        }}
        type="text"
        name="slug"
        value={data.slug}
        onChange={(e) => {
          setData({ ...data, slug: e.target.value });
        }}
      />

      <button className="btn" onClick={GenerateSlug}>
        تولید url
      </button>

      <label
        className="btn center"
        style={{ background: mainColor, color: "white", margin: "8px 0" }}
      >
        انتخاب فایل تصویر
        <input type="file" style={{ display: "none" }} />
      </label>

      <label>توضیحات پست</label>
      {/* <textarea name="" id="" cols="30" rows="10" value={content} onChange={e => setContent(e.target.value)}></textarea> */}

      <div dir="ltr" style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            padding: 4,
            minHeight: "380px",
            border: "1px #a9a9a9 solid",
            borderRadius: 4,
            width: "85%",
            minWidth: 255,
          }}
        >
          <Editor
            editorState={data.content}
            onEditorStateChange={(e) =>
              setData({
                ...data,
                content: e,
              })
            }
          />
        </div>
        <span style={{ fontSize: 13, color: "#d40909" }}>
          {getHtml() === <p></p> && console.log("sdad")}
        </span>
      </div>

      <h3>مشخصات</h3>

      <label>دسته بندی</label>

      <Select
        style={{ width: "70%" }}
        placeholder="لطفا تگ های مرتبط را انتخاب کنید"
        defaultValue={data.category}
        onChange={(e) =>
          setData({
            ...data,
            category: e,
          })
        }
      >
        {categoryList.map((e, key) => {
          return (
            <Select.Option value={e.name} key={key}>
              {e.rtlname}
            </Select.Option>
          );
        })}{" "}
      </Select>

      <button className="btn" onClick={submit}>
        اصلاح پست
      </button>
    </Container>
  );
}
