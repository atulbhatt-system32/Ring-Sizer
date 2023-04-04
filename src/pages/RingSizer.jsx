import React, { useState } from "react";

function RingSizer() {
  const [circleRadius, setCircleRadius] = useState(100);
  const [ringSize, setRingSize] = useState(0);

  const calculateRingSize = (ringRadius, distance) => {
    const circumference = 2 * Math.PI * ringRadius;
    const overlap = circumference - distance;
    const size = overlap / circumference;
    return size;
  };

  const ringRadius = (circleRadius * ringSize) / 100;
  const distance = circleRadius - ringRadius;
  const ringSizePercent = calculateRingSize(ringRadius, distance) * 100;

  return (
    <div>
      {/* Circle */}
      <svg width="300" height="300">
        <circle cx="150" cy="150" r={circleRadius} stroke="black" fill="none" />
        <circle cx="150" cy="150" r={ringRadius} stroke="red" fill="none" />
      </svg>

      {/* Ring sizer */}
      <div>
        <label htmlFor="ring-size">Ring size:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={ringSize}
          onChange={(e) => setRingSize(parseInt(e.target.value))}
        />
      </div>

      {/* Ring size */}
      <p>Ring size: {ringSizePercent.toFixed(2)}%</p>
    </div>
  );
}

export default RingSizer;
