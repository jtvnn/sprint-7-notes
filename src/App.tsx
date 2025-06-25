import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./page/Home";
import Layout from "./page/Layout";
import Projects from "./page/Projects";
import About from "./page/About";
import Project1 from "./page/Project1";
import Project2 from "./page/Project2";
import Project3 from "./page/Project3";
import Project4 from "./page/Project4";
import Project5 from "./page/Project5";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />}>
              <Route path="project1" element={<Project1 />} />
              <Route path="project2" element={<Project2 />} />
              <Route path="project3" element={<Project3 />} />
              <Route path="project4" element={<Project4 />} />
              <Route path="project5" element={<Project5 />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
