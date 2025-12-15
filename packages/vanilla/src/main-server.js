import { ServerRouter } from "./lib/ServerRouter";
// import { HomePage, NotFoundPage, ProductDetailPage } from "./pages";

const prod = process.env.NODE_ENV === "production";
const base = process.env.BASE || (prod ? "/front_7th_chapter4-1/vanilla/" : "/");

export const render = async (url) => {
  const router = new ServerRouter(base, url);
  // 홈 페이지 (상품 목록)
  router.addRoute("/", {});
  router.addRoute("/product/:id/", {});
  router.addRoute(".*", {});
  router.start();
  return "";
};
