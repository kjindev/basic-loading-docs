export default function Pulse() {
  const inputSize = 80;
  const size = (inputSize * 10) / 7;
  const color = "#e0e0e0";
  const animation = `
  @keyframes pulse {
    0% {
      scale: 0.72;
      opacity: 0.5;
    }
    100% {
      scale: 1.7;
      opacity: 0;
    }
  }
`;
  return (
    <>
      <style>{animation}</style>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: size,
          height: size,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            animation: "pulse 1.2s ease-in-out infinite",
            backgroundColor: color,
          }}
        ></div>
        <div
          style={{
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: inputSize,
            height: inputSize,
            top: "50%",
            left: "50%",
            borderRadius: "50%",
            backgroundColor: color,
            fontSize: 12,
          }}
        >
          LOADING
        </div>
      </div>
    </>
  );
}
