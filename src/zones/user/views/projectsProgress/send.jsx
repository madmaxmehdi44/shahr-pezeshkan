import React, { useState } from "react";
import Input from "components/input/input";
import styled from "styled-components";
import Fetch from "components/fetch/fetch";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

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

export default function App({ setreload }) {
  const [title, setTitle] = useState("");
  const [progress, setprogress] = useState(0);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [errors, setErrors] = useState({});

  const getHtml = () =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()));

  function submit() {
    Fetch.post(
      "/progress",
      {
        title: title,
        content: getHtml(),
        value: progress,
      },
      (res) => {
        console.log(res);
        if (res.errors) {
          setErrors(res.errors);
          return;
        } else alert("با موفقیت اضافه شد");
        setreload("send tab");
        setTitle("");
        setEditorState(() => EditorState.createEmpty());
      }
    );
  }

  return (
    <div>
      <h3>اضافه کردن وضعیت</h3>

      <Container>
        <Input
          type="text"
          name="title"
          errors={errors}
          label="عنوان"
          value={title}
          setValue={setTitle}
        />

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
        <h4>وضعیت پروژه</h4>
        <input
          type="number"
          min="0"
          max="100"
          name=""
          id=""
          value={progress}
          onChange={(e) => setprogress(e.target.value)}
        />
        <input
          type="range"
          name=""
          id=""
          value={progress}
          onChange={(e) => setprogress(e.target.value)}
        />
        <button className="btn" onClick={submit}>
          اضافه کردن وضعیت
        </button>
      </Container>
    </div>
  );
}
