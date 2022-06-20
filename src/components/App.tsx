import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AccessTokenRefresh from "components/containers/access-token-refresh";
import MainScreen from "components/screens/main-screen";
import ConfirmHandler from "components/contexts/confirm-handler";
import ErrorHandler from "components/contexts/error-handler";
import ApiProvider from "./providers/api-provider";
import FormsRoutes from "./screens/forms/forms-routes";
import UsersScreen from "./screens/users/users-routes";
import EditorScreen from "./screens/editor/editor-screen";

const apiProviders: React.FC<{}>[] = [];

/**
 * Application component
 */
const App: React.FC = () => (
  <ErrorHandler>
    <ApiProvider providers={ apiProviders }>
      <ConfirmHandler>
        {/* <AccessTokenRefresh> */}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={ <MainScreen/> }
            />
            <Route
              path="/forms"
              element={ <FormsRoutes/> }
            />
            <Route
              path="/users"
              element={ <UsersScreen/> }
            />
            <Route
              path="/editor"
              element={ <EditorScreen/> }
            />
          </Routes>
        </BrowserRouter>
        {/* </AccessTokenRefresh> */}
      </ConfirmHandler>
    </ApiProvider>
  </ErrorHandler>
);

export default App;