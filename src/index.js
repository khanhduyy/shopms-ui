import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./layouts/basicLayout";
import App from "./App";
import Login from "./pages/auth/login";

const rootElement = document.getElementById("root");

const getBasicLayout = (element) => {
  return (<BasicLayout children={element} />)
}

render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={getBasicLayout(<App/>)} />
    <Route path="login" element={getBasicLayout(<Login/>)} />
    </Routes>
   
  </BrowserRouter>,
  rootElement
);