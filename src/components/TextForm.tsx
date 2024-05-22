import React, { useState } from "react";

interface TextFormProps {
  heading: string;
  mode: "light" | "dark";
  showAlert: (message: string, type: string) => void;
}

const TextForm: React.FC<TextFormProps> = (props) => {
  const [text, setText] = useState<string>("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let textArea = document.getElementById(
      "myBox"
    ) as HTMLTextAreaElement;
    textArea.select();
    textArea.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows={8}></textarea>
        </div>
        <div className="d-flex flex-wrap">
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}>
        <h2>Your text summary</h2>
        <p>
          {
            text
              .split(/\s+/)
              .filter((element) => element.length !== 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text
              .split(/\s+/)
              .filter((element) => element.length !== 0).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
