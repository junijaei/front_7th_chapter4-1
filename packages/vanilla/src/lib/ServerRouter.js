/**
 * 서버용 라우터 (읽기 전용)
 */

export class ServerRouter {
  #routes;
  #currentUrl;
  #baseUrl;
  #route;

  constructor(baseUrl, url) {
    this.#routes = new Map();
    this.#currentUrl = url;
    this.#baseUrl = baseUrl.replace(/\/$/, ""); // 끝의 / 제거
  }

  get baseUrl() {
    return this.#baseUrl;
  }

  get query() {
    const query = this.#currentUrl.split("?")[1] || "";
    return query ? ServerRouter.parseQuery(`?${query}`) : {};
  }

  get params() {
    this.#route = this.#findRoute();
    return this.#route?.params ?? {};
  }

  get route() {
    this.#route = this.#findRoute();
    return this.#route;
  }

  get target() {
    this.#route = this.#findRoute();
    return this.#route?.handler;
  }

  /**
   * 라우트 등록
   * @param {string} path - 경로 패턴 (예: "/product/:id")
   * @param {Function} handler - 라우트 핸들러
   */
  addRoute(path, handler) {
    // 경로 패턴을 정규식으로 변환
    const paramNames = [];
    const regexPath = path
      .replace(/:\w+/g, (match) => {
        paramNames.push(match.slice(1)); // ':id' -> 'id'
        return "([^/]+)";
      })
      .replace(/\//g, "\\/");

    const regex = new RegExp(`^${this.#baseUrl}${regexPath}$`);

    this.#routes.set(path, {
      regex,
      paramNames,
      handler,
    });
  }

  #findRoute() {
    const pathname = this.#currentUrl.split("?")[0];
    for (const [routePath, route] of this.#routes) {
      const match = pathname.match(route.regex);
      if (match) {
        // 매치된 파라미터들을 객체로 변환
        const params = {};
        route.paramNames.forEach((name, index) => {
          params[name] = match[index + 1];
        });

        return {
          ...route,
          params,
          path: routePath,
        };
      }
    }
    return null;
  }

  /**
   * 라우터 시작
   */
  start() {
    this.#route = this.#findRoute();
  }

  /**
   * 쿼리 파라미터를 객체로 파싱
   * @param {string} search - location.search 또는 쿼리 문자열
   * @returns {Object} 파싱된 쿼리 객체
   */
  static parseQuery = (search = "") => {
    const params = new URLSearchParams(search);
    const query = {};
    for (const [key, value] of params) {
      query[key] = value;
    }
    return query;
  };
}
