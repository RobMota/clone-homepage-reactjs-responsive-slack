import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Main from "./components/Main";

const myStyle = {
  padding: "15px 0",
  textAlign: "center",
  fontSize: "2em",
  fontWeight: "700",
  martinTop: "100",
};

function App() {
  return (
    <>
      <Header />
      <Main />
      <h1 style={myStyle}>Continue...</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
