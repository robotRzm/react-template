import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// redux 集成文件
import store from "./store";
// 路由配置文件
import router from './router';

createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
