import React, {useEffect} from "react";
import RootStoreContext from "../stores/RootStore";
import {observer} from "mobx-react-lite";

const SelectScheme = observer(() => {
  const {scheme} = React.useContext(RootStoreContext);
  const cssId = "current-scheme";
  const schemes = {
    old: "HiQolor Old",
    one: "HiQolor One",
    two: "HiQolor Two",
    left: "HiQolor Left",
    right: "HiQolor Right",
    bright: "HiQolor Bright",
    normal: "HiQolor Normal",
    "ubuntu-breeze": "Ubuntu Breeze",
  };

  useEffect(() => {
    setScheme("old");
    scheme.changeScheme("old");
  }, []);

  const handleChange = event => {
    setScheme(event.target.value);
    scheme.changeScheme(event.target.value);
  };

  const setScheme = name => {
    let link = document.getElementById(cssId);
    if (!link) {
      const head = document.getElementsByTagName("head")[0];
      link = createCssLink();
      head.appendChild(link);
    }
    link.href = getCssPath(name);
  };

  const createCssLink = () => {
    let link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "";
    link.media = "all";

    return link;
  };

  const getCssPath = (name) => {
    return "schemes/" + name + ".css";
  };

  return (
    <>
      <label htmlFor="select-scheme">Scheme:</label>
      <select onChange={handleChange}>
        {Object.entries(schemes).map(([key, name], i) => <option key={i} value={key}>{name}</option>)}
      </select>
    </>
  );
});

export default SelectScheme;
