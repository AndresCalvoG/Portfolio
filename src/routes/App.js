import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../context";

import { Layout } from "../components/Layout/Layout";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <Layout>
          {/* <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/Home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            /> 
          </Routes> */}
        </Layout>
      </AppProvider>
    </HashRouter>
  );
}

export default App;
