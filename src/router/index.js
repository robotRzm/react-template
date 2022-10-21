import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import('../App'));
const Home = lazy(() => import('../page/Home'));
const About = lazy(() => import('../page/About'));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <Suspense><Home /></Suspense>
        },
        {
          path: "about",
          element: <Suspense><About /></Suspense>

        }
      ]
    }
  ],
  {
    basename: '/'
  }
);

export default router;
