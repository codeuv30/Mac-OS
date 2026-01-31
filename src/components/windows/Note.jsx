import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "./MacWindow";
import SystaxHightlighter from "react-syntax-highlighter"
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./note.scss";

const Note = ({ windowName, windowState, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((raw) => raw.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowsState={setWindowsState} width={"50vw"} height={"60vh"}>
      <div className="note-window">
        {markdown ? <SystaxHightlighter language="typescript" style={atelierDuneDark} >{markdown}</SystaxHightlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
