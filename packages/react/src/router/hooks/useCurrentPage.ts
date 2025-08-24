import { router } from "../router";
import { useRouter } from "@hanghae-plus/lib";

export const useCurrentPage = () => {
  return useRouter(router, ({ target }) => target);
};
