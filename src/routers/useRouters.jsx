import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

export default function useRouters() {
  const routers = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return routers;
}
