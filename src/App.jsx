import React from "react";
import ColorfulMessage from "./component/ColofulMessage";

const App = () => {
  const onClickButton = () => alert("alert");
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onCLick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
