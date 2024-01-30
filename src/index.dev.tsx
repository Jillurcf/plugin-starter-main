import { useState } from "react";

import Block from "./index.block";
import BlockOne from "./index.blockOne";
import {
  AbstractActions,
  MockPluginBridgeProvider
} from "@productgenie/plugin-bridge";
import { Config, configSchema } from "./block-config";
import { Configs, configSchemas } from "./block-config-one";
import { RenderConfigurer } from "@productgenie/plugin-config-utils";
import { configurer } from "./block-configurer";
import { configurerOne } from "./block-configurer-one";
import { AbstractDatasource } from "@productgenie/datasource";
import Button from "./button"
import MyColorPicker from "./MyColorPicker";

const mockDatasource = new (class extends AbstractDatasource {
  // todo: impl mock datasource here
})();

const mockActions = new (class extends AbstractActions {
  // todo: impl mock actions here
})();

export const Dev = () => {
  const [config, setConfig] = useState<Config>({
    text: "This is an annoucement",
    icon: "campaign",
  });

  const [configs, setConfigs] = useState<Configs>({
    text: "This is the time",
    icon: "access alarm",
  });
 

  return (
    <>
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
    </MockPluginBridgeProvider>
   <MockPluginBridgeProvider>
   <div style={{ display: "flex", gap:20 }}>
    <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
    <BlockOne config={configs} />      
     <div style={{border: 30, height: 200, width: 'full', backgroundColor: "red"}}>
      <h1>Chose your Color here</h1>
     </div>
      
    </div>
    <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
     <RenderConfigurer
            configurer={configurerOne}
            configSchema={configSchemas}
            config={configs}
            onConfigChange={(newConfigs) => {
            setConfigs(newConfigs as Configs);
            }}
          />
     <MyColorPicker style={{}}></MyColorPicker>
             </div>
     
  </div>
   </MockPluginBridgeProvider>
   <MockPluginBridgeProvider>
   <div style={{ display: "flex", gap:20 }}>
    <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
   
     <div style={{border: 30, height: 200, width: 'full', backgroundColor: "gray", alignItems:"center",}}>
      <h1>Select an Image</h1>
     </div>
      
    </div>
    <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
     <Button style={{padding:20, backgroundColor: "gray", border: "none", margin: 20}} >Image</Button>
    
             </div>
     
  </div>
   </MockPluginBridgeProvider>
  </>
  );
};
