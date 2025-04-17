import { RouteProps } from "react-router-dom";
import PAGES from "@utils/constants/pages";
import Matriz from "@pages/Matriz";
import LandingPage from "@pages/LandingPage";

export interface RouteConfig extends Omit<RouteProps, "component"> {
  component: JSX.Element;
}

export const routes = [
  {
    path: `${PAGES.matriz}/:courseName/:curriculumCode`,
    component: <Matriz />
  },
  {
    path: PAGES.landing,
    component: <LandingPage />
  }
];
