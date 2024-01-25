import { css } from "@emotion/react";

declare module "*.module.css";

declare module "react" {
  interface HTMLAttributes<T> {
    css?: ReturnType<typeof css>;
  }
}
