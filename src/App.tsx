import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./page/Home";
import Layout from "./page/Layout";
import Projects from "./page/Projects";
import About from "./page/About";
import MyForm from "./page/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/:index?" element={<Projects />}></Route>
            <Route path="about" element={<About />} />
            <Route path="form" element={<MyForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
