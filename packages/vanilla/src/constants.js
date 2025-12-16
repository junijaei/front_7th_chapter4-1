// import { HomePage, NotFoundPage, ProductDetailPage } from "./pages";

export const BASE_URL = import.meta.env.PROD ? "/front_7th_chapter4-1/vanilla/" : "/";

export const ROUTES = [
  { path: "/", target: "" },
  { path: "/product/:id/", target: "" },
  { path: ".*", target: "" },
];
