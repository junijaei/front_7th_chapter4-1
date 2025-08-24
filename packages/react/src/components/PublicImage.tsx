import { BASE_URL } from "../constants";
import { type ComponentProps, memo } from "react";

export const PublicImage = memo(({ src, ...props }: ComponentProps<"img">) => {
  const url = String(BASE_URL + src).replace("//", "/");

  return <img src={url} {...props} />;
});

PublicImage.displayName = "PublicImage";
