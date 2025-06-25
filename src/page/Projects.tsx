import { NavLink, Outlet, useParams } from "react-router";
//import Project1 from "./Project1";
//import Project2 from "./Project2";

function Projects() {
  //const params = useParams();
  //console.log(params["pid"]);
  return (
    <div>
      HERE ARE THE PROJECTS I HAVE CREATED!
      <ul>
        <li>
          <NavLink to="/projects/project1">Project 1</NavLink>
        </li>
        <li>
          <NavLink to="/projects/project2">Project 2</NavLink>
        </li>
        <li>
          <NavLink to="/projects/project3">Project 3</NavLink>
        </li>
        <li>
          <NavLink to="/projects/project4">Project 4</NavLink>
        </li>
        <li>
          <NavLink to="/projects/project5">Project 5</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Projects;
