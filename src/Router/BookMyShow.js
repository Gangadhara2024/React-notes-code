import React, { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";

const Movies = lazy(() => import("./Movies.js"));
const Wrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export const BookMyShow = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="explore" element={<Wrapper />}>
            <Route
              path="movies"
              element={
                <Suspense fallback={<b>movies loading ....</b>}>
                  <Movies />
                </Suspense>
              }
            />
            <Route path="stream" element={<h1>stream page</h1>} />
            <Route path="events" element={<h1>events page</h1>} />
            <Route path="play" element={<h1>play page</h1>} />
            <Route path="sports" element={<h1>sports page</h1>} />
            <Route path="activities" element={<h1>activities page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
