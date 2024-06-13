import { memo, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Main = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="box">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<h2>home page</h2>} />
          <Route path="about" element={<h2>about page</h2>} />
        </Routes>
      </BrowserRouter>
      Router-example
    </div>
  );
};
