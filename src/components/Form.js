import React from "react";
import {ColorInput, HueInput, SaturationInput, ValueInput, HexInput} from "./ColorInputs";
import RootStoreContext from "../stores/RootStore";
import {observer} from "mobx-react-lite";

const Form = observer(() => {
  const {scheme} = React.useContext(RootStoreContext);

  return (
    <div id="form">
      <table>
        <thead>
        <tr>
          <th className="text-right">Name</th>
          <th className="text-center">Color</th>
          <th className="text-center">Hue</th>
          <th className="text-center">Saturation</th>
          <th className="text-center">Value</th>
          <th className="text-center">Hex</th>
        </tr>
        </thead>
        <tbody className={"text-center"}>
        {Object.entries(scheme.names).map(([name, label], i) => (
          <tr key={i}>
            <th className="text-right align-middle">{label}</th>
            <td>
              <ColorInput name={name} bold="0"/>/<ColorInput name={name} bold="1"/>
            </td>
            <td>
              <HueInput name={name} bold="0"/>/<HueInput name={name} bold="1"/>
            </td>
            <td>
              <SaturationInput name={name} bold="0"/>/<SaturationInput name={name} bold="1"/>
            </td>
            <td>
              <ValueInput name={name} bold="0"/>/<ValueInput name={name} bold="1"/>
            </td>
            <td>
              <HexInput name={name} bold="0"/>/<HexInput name={name} bold="1"/>
            </td>
          </tr>
        ))}
        <tr>
          <th className="text-right"/>
          <td/>
          <td>
            <input type="number" min="0"/>/<input type="number" min="0"/>
          </td>
          <td>
            <input type="number" min="0"/>/<input type="number" min="0"/>
          </td>
          <td>
            <input type="number" min="0" defaultValue={scheme.hue}/>/<input type="number" min="0"/>
          </td>
        </tr>
        </tbody>
      </table>
      <pre>{JSON.stringify(scheme.colors, 0, 2)}</pre>
    </div>
  );
});

export default Form;
