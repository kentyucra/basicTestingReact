import "./App.css";
import React from "react";

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function App() {
  const [color, setColor] = React.useState(true);
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ color", color);
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: checked
            ? "gray"
            : color
            ? "mediumvioletred"
            : "midnightblue",
        }}
        onClick={(e) => {
          setColor(!color);
        }}
        disabled={checked}
      >
        {color ? "Change to midnightblue" : "Change to mediumvioletred"}
      </button>
      <input
        type="checkbox"
        onChange={(e) => {
          setChecked(!checked);
        }}
      />
    </div>
  );
}

export default App;
