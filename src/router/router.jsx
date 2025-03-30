import { createHashRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Main from "../components/main/Main";
import CV from "../components/card/CV";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Main />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/cv",
    element: <CV />,
  },
]);

export default router;
