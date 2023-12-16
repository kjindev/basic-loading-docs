import React from "react";

export default function SpinnerDot() {
  const size = 90;
  const dotSize = size * 0.12;
  const dotPosition = dotSize / 2;
  const animation = `
    @keyframes spin {
      from{
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={{ position: "relative" }}>
      {/* <style>{animation}</style> */}
      <div
        style={{
          width: size,
          height: size,
          border: "3px solid #00000090",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          animation: "spin 2s linear infinite",
        }}
      >
        <div
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: "#000000",
            borderRadius: "50%",
            // transform: `translateY(-70%)`,
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -45%)",
          fontSize: "12px",
        }}
      >
        LOADING
      </div>
    </div>
  );
}
