import React, { useState } from "react";
// import Header from "components/header/header";
// import Navbar from "components/navbar/navbar";
// import { Route, Switch, Redirect } from "react-router-dom";
import Input from "components/input/input";
import { Switch } from "antd";
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
  // ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { mainColor } from "common";
// import Sidebar from "components/navbar/userSidebar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
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
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [category, setcategory] = useState("news");
  const [isprivate, setisprivate] = useState(true);
  const [errors, setErrors] = useState({});

  const getHtml = () =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()));

  function GenerateSlug() {
    if (!title) {
      alert("لطفا عنوان را وارد کنید!");
      return;
    }

    let temp = title.replace(/\s+/g, "-").toLowerCase();
    temp.trim();

    let result = temp.match(
      /[a-z0-9\u0600-\u06FF]+(?:-[a-z0-9\u0600-\u06FF]+)*$/g
    );

    if (result) {
      setSlug(result[0]);
    } else alert("خطایی رخ داده! لطفا url را تایپ کنید");
  }

  function submit(props) {
    Fetch.post(
      "/posts",
      {
        title: title,
        slug: slug,
        content: getHtml(),
        category: category,
        author: "ادمین",
        data: JSON.stringify({
          image:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F304965%2Foriginal%2Ffile-20191203-66994-kblsp8.jpg%3Fixlib%3Drb-1.1.0%26rect%3D0%252C0%252C5464%252C3492%26q%3D45%26auto%3Dformat%26w%3D496%26fit%3Dclip&imgrefurl=https%3A%2F%2Ftheconversation.com%2Fthis-small-german-town-took-back-the-power-and-went-fully-renewable-126294&tbnid=qL14oYHdFeFFIM&vet=12ahUKEwjR-PK_57_xAhXDIRoKHSXYC2YQMygqegUIARCpAg..i&docid=rt38VPeOcdbV0M&w=496&h=317&q=town&ved=2ahUKEwjR-PK_57_xAhXDIRoKHSXYC2YQMygqegUIARCpAg",
        }),
      },
      (res) => {
        console.log(res);
        if (res.errors) {
          setErrors(res.errors);
          return;
        } else alert("با موفقیت اضافه شد");
        window.location.reload();
        setTitle("");
        setSlug("");
        setEditorState(() => EditorState.createEmpty());
      }
    );
  }
  return (
    <div>
      {" "}
      <h3>اضافه کردن پست</h3>
      <Container>
        <Input
          type="text"
          name="title"
          errors={errors}
          label="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          name="slug"
          errors={errors}
          label="url عنوان"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
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
              width: "60%",
              minWidth: 255,
            }}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={(e) => setEditorState(e)}
            />
          </div>
          <span style={{ fontSize: 13, color: "#d40909" }}>
            {getHtml() === <p></p> && console.log("sdad")}
          </span>
        </div>
        <label>دسته بندی</label>

        <Select
          name=""
          id=""
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          {categoryList.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.rtlname}
              </option>
            );
          })}
        </Select>
        <div>
          <label>خصوصی : </label>
          <Switch
            defaultChecked
            value={isprivate}
            onChange={(e) => {
              setisprivate(e);
            }}
          />
        </div>
        <button className="btn" onClick={submit}>
          اضافه کردن پست
        </button>
      </Container>
    </div>
  );
};
