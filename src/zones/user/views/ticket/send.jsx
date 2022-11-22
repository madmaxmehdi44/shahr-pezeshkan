import React, { useState } from "react";
import Input from "components/input/input";
import { categoryList } from "routes";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  //   convertFromHTML,
  //   ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";

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
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [category, setcategory] = useState("news");
  const [errors, setErrors] = useState({});

  const getHtml = () =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()));

  function submit(props) {
    const user = JSON.parse(localStorage.getItem("user"));

    Fetch.post(
      "/ticket",
      {
        title: title,
        content: getHtml(),
        category: category,
        user: user.id,
        // data: data,
        state: false,
      },
      (res) => {
        console.log(res);
        if (res.errors) {
          setErrors(res.errors);
          return;
        } else alert("با موفقیت اضافه شد");
        setTitle("");
        setEditorState(() => EditorState.createEmpty());
      }
    );
  }
  return (
    <div>
      <h3>ارسال تیکت</h3>

      <Container>
        <Input
          type="text"
          name="title"
          errors={errors}
          label="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>توضیحات تیکت</label>
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
        <button className="btn" onClick={submit}>
          ارسال تیکت
        </button>
      </Container>
    </div>
  );
};
