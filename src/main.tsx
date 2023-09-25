import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HookForm from "./routes/HookForm/index.tsx";
import FormikForm from "./routes/FormikForm/index.tsx";
import RawForm from "./routes/RawForm/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<RawForm />} />
          <Route path="rhf" element={<HookForm />} />
          <Route path="formik" element={<FormikForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
