import React from "react";
import {observer} from "mobx-react-lite";
import RootStoreContext from "../stores/RootStore";

const NumberInput = observer(({component, name, bold, type = "number", max = 100}) => {
  const {scheme} = React.useContext(RootStoreContext);
  const onChange = e => {
    // scheme.setComponent(component, name, bold, e.target.value);
  };

  return (
    <input
      type={type} min="0" max={max} name={name}
      value={scheme.getComponent(component, name, bold)}
      onChange={onChange}
    />
  );
});

const HueInput = ({name, bold}) => (
  <NumberInput component="hue" name={name} bold={bold} max="359"/>
);

const SaturationInput = ({name, bold}) => (
  <NumberInput component="saturation" name={name} bold={bold}/>
);

const ValueInput = ({name, bold}) => (
  <NumberInput component="value" name={name} bold={bold}/>
);

const HexInput = ({name, bold}) => (
  <NumberInput component="hex" name={name} bold={bold} type="hex"/>
);

const ColorInput = ({name, bold}) => (
  <NumberInput component="hex" name={name} bold={bold} type="color"/>
);

export {ColorInput, HueInput, SaturationInput, ValueInput, HexInput};
