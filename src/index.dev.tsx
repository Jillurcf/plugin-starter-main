import { useState } from "react";

import Block from "./index.block";
import {
  AbstractActions,
  MockPluginBridgeProvider
} from "@productgenie/plugin-bridge";
import { Config, configSchema } from "./block-config";
import { RenderConfigurer } from "@productgenie/plugin-config-utils";
import { configurer } from "./block-configurer";
import { AbstractDatasource } from "@productgenie/datasource";

const mockDatasource = new (class extends AbstractDatasource {
  // todo: impl mock datasource here
})();

const mockActions = new (class extends AbstractActions {
  // todo: impl mock actions here
})();

export const Dev = () => {
  const [config, setConfig] = useState<Config>({
    text: "This is an annoucement",
    icon: "campaign"
  });

  return (
    <MockPluginBridgeProvider datasource={mockDatasource} actions={mockActions}>
      <div style={{ display: "flex", gap:20 }}>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <Block config={config} />
        </div>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <RenderConfigurer
            configurer={configurer}
            configSchema={configSchema}
            config={config}
            onConfigChange={(newConfig) => {
              setConfig(newConfig as Config);
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap:20 }}>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <Block config={config} />
        </div>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <RenderConfigurer
            configurer={configurer}
            configSchema={configSchema}
            config={config}
            onConfigChange={(newConfig) => {
              setConfig(newConfig as Config);
            }}
          />
        </div>
      </div>
    </MockPluginBridgeProvider>
  );
};
