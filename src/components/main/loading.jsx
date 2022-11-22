import "./loading.css";

export default ({ fullscreen }) => {
  return (
    <div style={fullscreen && style} className="center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const style = {
  height: "100vh",
  width: "100vw",
};
