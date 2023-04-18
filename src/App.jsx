import React, { useState, useEffect } from "react";

const App = () => {
  const [circleRadius, setCircleRadius] = useState(50);
  const devicePixelRatio = window.devicePixelRatio;
  const [ppi, setPpi] = useState(96);

  const circleDiameter = circleRadius * 2 * devicePixelRatio;
  const diameterInInches = circleDiameter / ppi;
  const diameterInCm = diameterInInches * 2.54;
  const diameterInMm = diameterInCm * 10;

  const handleSliderChange = (event) => {
    setCircleRadius(event?.target?.value);
  };

  useEffect(() => {
    const getPpi = () => {
      const div = document.createElement("div");
      div.style.width = "1in";
      document.body.appendChild(div);
      const ppi = div.clientWidth;
      document.body.removeChild(div);
      return ppi;
    };

    setPpi(getPpi());
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          minHeight: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          style={{
            width: `${circleDiameter}px`,
            height: `${circleDiameter}px`,
            border: "1px solid black",
            borderRadius: "50%",
            display: "inline-block",
          }}
        >
          <circle
            cx={circleDiameter / 2}
            cy={circleDiameter / 2}
            r={circleDiameter / 2 - 1}
            stroke="black"
            strokeWidth="1"
            fill="transparent"
          />
        </svg>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={circleRadius}
          onChange={handleSliderChange}
        />
      </div>
      <p>Adjust the slider to match your ring size.</p>
      <p>
        Ring size: {diameterInMm.toFixed(2)} mm / {diameterInCm.toFixed(2)} cm
      </p>
    </div>
  );
};

export default App;
