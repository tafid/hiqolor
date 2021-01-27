import "bootstrap/dist/css/bootstrap.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import "./App.css";
import "./colors.css";

import React from "react";
import SyntaxDemo from "./components/SyntaxDemo";
import SelectScheme from "./components/SelectScheme";
import Form from "./components/Form";

const App = () => {
  return (
    <div className={"container"}>
      <div className="row py-5">
        <div className="col-sm-6">
          <SyntaxDemo/>
        </div>
        <div className="col-sm-6">
          <SelectScheme/>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default App;
