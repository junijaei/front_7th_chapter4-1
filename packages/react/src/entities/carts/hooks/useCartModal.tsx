import { useAutoCallback } from "@hanghae-plus/lib";
import { CartModal } from "../components";
import { useModalContext } from "../../../components";

export const useCartModal = () => {
  const { open } = useModalContext();

  return useAutoCallback(() => open(<CartModal />));
};
