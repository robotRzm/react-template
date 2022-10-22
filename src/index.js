import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// 路由配置文件
import router from './router';

createRoot(document.getElementById('root'))
  .render(
    <RouterProvider router={router} />
  );
