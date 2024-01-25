import React from "react";
import {
  ConfigurerComponentProps,
  RenderConfigurer
} from "@productgenie/plugin-config-utils";
import { configurer } from "./block-configurer";
import { Config, configSchema } from "./block-config";

const BlockConfigurer: React.FC<ConfigurerComponentProps> = ({
  config,
  onConfigChange,
  addChild
}) => {
  return (
    <RenderConfigurer
      configurer={configurer}
      configSchema={configSchema}
      config={config}
      onConfigChange={(values) => {
        onConfigChange(values as Config);
      }}
      addChild={addChild}
    />
  );
};

export default BlockConfigurer;
