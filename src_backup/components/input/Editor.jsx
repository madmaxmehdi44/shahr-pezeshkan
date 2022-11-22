import React, { useEffect, useState } from "react";



export default function App(props) {

  
  useEffect(() => {
    console.log(props.editorState);
  }, [props.editorState]);

  console.log(props.setEditorState);

}