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
          element: (
            <Suspense fallback={<div>...</div>}>
              <Home />
            </Suspense>
          )
        },
        {
          path: "about/:id",
          element: (
            <Suspense fallback={<div>...</div>}>
              <About />
            </Suspense>
          )
        }
      ]
    }
  ],
  {
    basename: '/'
  }
);

export default router;
