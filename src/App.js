import React from "react";
import HeaderComponent from "./Prototype/Header/HeaderComponent";
import MainPage from "./Prototype/Mian/MainPage";

function App() {
  return (
    <>
      <HeaderComponent mainPageComponoent={<MainPage />} />
    </>
  );
}

export default App;
