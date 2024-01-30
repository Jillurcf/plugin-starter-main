import React from "react";
import {
  ConfigurerComponentProps,
  RenderConfigurer
} from "@productgenie/plugin-config-utils";
import { configurerOne } from "./block-configurer-one";
import { Configs, configSchemas } from "./block-config-one";

const BlockConfigurerOne: React.FC<ConfigurerComponentProps> = ({
  config,
  onConfigChange,
  addChild
}) => {
  return (
    <RenderConfigurer
      configurer={configurerOne}
      configSchema={configSchemas}
      config={config}
      onConfigChange={(values) => {
        onConfigChange(values as Configs);
      }}
      addChild={addChild}
    />
    
  );
};

export default BlockConfigurerOne;
