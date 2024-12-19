import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./utils/routes";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
