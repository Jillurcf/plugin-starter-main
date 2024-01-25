import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";

const Block: React.FC<{ config: Config }> = ({ config }) => {
  return (
    <div
      css={css({ display: "flex", backgroundColor: "black", color: "white" })}
    >
      <span
        css={css({ padding: "1rem", fontSize: "4rem" })}
        className="material-icons-outlined"
      >
        {config.icon}
      </span>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
          flex: 1,
          padding: "1rem",
          textAlign: "center"
        })}
      >
        <span>{config.text}</span>
      </div>
    </div>
  );
};

export default Block;
