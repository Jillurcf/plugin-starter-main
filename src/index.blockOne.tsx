import React from "react";
import type { Configs } from "./block-config-one";
import { css } from "@emotion/react";

const BlockOne: React.FC<{ config: Configs }> = ({ config }) => {
  return (
    <div
      css={css({ display: "flex", backgroundColor: "Yellow", color: "black", textAlign: "left" })}
    >
      <span
        css={css({ padding: "1rem", fontSize: "4rem", textAlign: "left" })}
        className="material-icons-outlined"
      >
        {config.icon}
      </span>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "2.5rem",
          flex: 1,
          padding: "1rem",
          textAlign:"left"
          // textAlign: "start",
        })}
      >
        <span>{config.text}</span>
        
      </div>
      
    </div>
  );
};

export default BlockOne;
