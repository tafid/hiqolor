import React from "react";
import {Provider} from "mobx-react";
import "./App.css";

import Text from "./component/Text";
import Form from "./component/Form";
import SelectScheme from "./component/SelectScheme";
import ColorScheme from "./store/ColorScheme";
import ColorStore from "./store/ColorStore";

const stores = {
  scheme: new ColorScheme(),
};

const App = () => (
  <Provider {...stores}>
    <div id="hiqolor" className="container">
      <div className="row">
        <div className="col-sm">
          <Text />
        </div>
        <div className="col-sm">
          <SelectScheme />
          <Form />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
