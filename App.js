import React from "react";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import Navigation from "./src/navigation";



const App = () => {
  return(
    <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <Navigation/>
        </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

export default App;