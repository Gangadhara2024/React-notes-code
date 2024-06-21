import { Fetch } from "./weatherApp/fetch";
import "./App.css";
import { AxiosExample } from "./axiosExample";
import { useEffect, useRef, useState } from "react";
import { Appo } from "./Router/Appo";
// import { Main } from "./context/Main";
import { Main } from "./Dummy";

export const App = () => {
  return (
    <div>
      <Appo />
      {/* <Main/> */}
    </div>
  );
};
