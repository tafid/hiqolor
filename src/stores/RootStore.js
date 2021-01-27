import {createContext} from "react";
import ColorScheme from "./ColorScheme";
import {reaction} from "mobx";

class RootStore {
  constructor() {
    this.scheme = new ColorScheme();
    reaction(
      () => this.scheme.scheme,
      () => {
        this.scheme.loadFromCss();
      },
    );
  }
}

const RootStoreContext = createContext(new RootStore());

export default RootStoreContext;