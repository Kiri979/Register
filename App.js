import React from "react";
import { AuthProvider } from "./src/hooks/provider/authProvider";
import Navigation from "./src/navigation/navigation"

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
