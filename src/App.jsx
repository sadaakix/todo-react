import React from "react";

const App = () => {
  const onClickButton = () => alert("alert");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onCLick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
